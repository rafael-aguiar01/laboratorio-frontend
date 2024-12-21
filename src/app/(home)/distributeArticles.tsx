import { PostDataType } from "@/data/types";

type Section = {
  id: string;
  component: string;
  startIndex?: number;
  endIndex?: number;
  filterType?: string;
};

type SectionsResponse = {
  [key: string]: PostDataType[];
};

type FilteredArticles = {
  [key: string]: PostDataType[];
};

function getPostType(article: any): "standard" | "video" | "gallery" | "audio" {
  if (article.type === "video") {
    return "video";
  } else if (article.type === "gallery") {
    return "gallery";
  } else if (article.type === "audio") {
    return "audio";
  } else {
    return "standard"; // Valor padrão
  }
}

export const distributeArticles = (
  data: any,
  sections: Section[],
  filteredArticlesByType: FilteredArticles = {}
): SectionsResponse => {
  const result: SectionsResponse = {};
  const articles = data.articles;

  sections.forEach((section) => {
    const { id, filterType } = section;

    let articlesToMap: PostDataType[] = [];

    if (filterType === "manchete") {
      articlesToMap = articles
      .filter((article: any) => article.visible === "manchete")
      .sort((a: any, b: any) => new Date(b.update_at).getTime() - new Date(a.update_at).getTime())
      .slice(0, 4);
    } else {
      // Para outras seções, usa a lógica de startIndex e endIndex (se esses campos estiverem definidos na seção)
      const { startIndex, endIndex } = section;
      articlesToMap = articles.slice(startIndex, endIndex);
    }

    // Mapeia as propriedades dos artigos para o formato desejado
    const mappedArticles = articlesToMap.map((article: any) => ({
      id: article.id,
      title: article.title,
      href: `/single/${article.slug}`,
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
      postType: getPostType(article),
    }));

    result[id] = mappedArticles;
  });

  return result;
};