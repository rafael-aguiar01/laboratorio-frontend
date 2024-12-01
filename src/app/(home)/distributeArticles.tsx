import { PostDataType } from "@/data/types";

type Section = {
  id: string;
  component: string;
  startIndex: number;
  endIndex: number;
};

type SectionsResponse = {
  [key: string]: PostDataType[];
};


export const distributeArticles = (
    data: any, 
    sections: Section[]
  ): SectionsResponse => {
    const result: SectionsResponse = {};
    const articles = data.articles;
  
    sections.forEach((section) => {
      const { id, startIndex, endIndex } = section;
  
      const filteredArticles = articles.slice(startIndex, endIndex).map((article: any) => ({
        id: article.id,
        title: article.title,
        href: `/single-4/${article.slug}`,
        featuredImage: article.featureImg, 
        categories: article.tags ? article.tags.map((tag: string) => ({ name: tag })) : [],
        author: {
          id: article.user.id,
          firstName: article.user.name.split(" ")[0] || "", 
          lastName: article.user.name.split(" ")[1] || "",
          displayName: article.user.name || "",
          avatar: article.user.avatar || "",
          count: 0, 
          desc: "", 
          jobName: "", 
          href: `/author/${article.user.id}`,
        },
        date: article.update_at,
        like: {
          count: 0, 
          isLiked: false, 
        },
        bookmark: {
          count: 0, 
          isBookmarked: false, 
        },
        commentCount: 0, 
        viewdCount: 0, 
        readingTime: 0, 
        postType: "standard", 
      }));
  
      result[id] = filteredArticles;
    });
  
    return result;
  };