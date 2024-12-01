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
    data: any, // Agora você vai passar o objeto inteiro, não apenas o array
    sections: Section[]
  ): SectionsResponse => {
    const result: SectionsResponse = {};
  
    // Acesse corretamente o array de artigos
    const articles = data.articles; // Acessando o array de artigos no objeto
  
    sections.forEach((section) => {
      const { id, startIndex, endIndex } = section;
  
      const filteredArticles = articles.slice(startIndex, endIndex).map((article: any) => ({
        id: article.id,
        title: article.title,
        href: `/article/${article.slug}`,
        featuredImage: article.featureImg, // Corrigindo para o nome correto da imagem
        categories: article.tags ? article.tags.map((tag: string) => ({ name: tag })) : [],
        author: {
          id: article.user.id,
          firstName: article.user.name.split(" ")[0] || "", // Supondo que o nome tenha o formato 'Nome Sobrenome'
          lastName: article.user.name.split(" ")[1] || "",
          displayName: article.user.name || "",
          avatar: article.user.avatar || "",
          count: 0, // Ajuste conforme necessário
          desc: "", // Ajuste conforme necessário
          jobName: "", // Ajuste conforme necessário
          href: `/author/${article.user.id}`,
        },
        date: article.update_at,
        like: {
          count: 0, // Ajuste conforme necessário
          isLiked: false, // Ajuste conforme necessário
        },
        bookmark: {
          count: 0, // Ajuste conforme necessário
          isBookmarked: false, // Ajuste conforme necessário
        },
        commentCount: 0, // Ajuste conforme necessário
        viewdCount: 0, // Ajuste conforme necessário
        readingTime: 0, // Ajuste conforme necessário
        postType: "", // Ajuste conforme necessário
      }));
  
      result[id] = filteredArticles;
    });
  
    return result;
  };