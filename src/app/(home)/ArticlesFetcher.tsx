// app/articlesFetcher.tsx
'use client';

import { useGetArticlesQuery } from '@/services/api/articles/ServiceArticles';
import { useEffect, useState } from 'react';

interface Section {
  id: string;
  component: string;
  quantity: number;
}

const ArticlesFetcher = ({ sections }: { sections: Section[] }) => {
  const portalId = 4;
  const { data: articles } = useGetArticlesQuery(portalId);
  const [newsData, setNewsData] = useState<{ id: string, news: any[] }[]>([]);

  useEffect(() => {
    if (articles) {
      let currentIndex = 0;
      const filteredNews = sections.map(section => {
        const sectionNews = articles.slice(currentIndex, currentIndex + section.quantity);
        currentIndex += section.quantity;
        return {
          id: section.id,
          news: sectionNews
        };
      });

      setNewsData(filteredNews);
    }
  }, [articles, sections]);

  return null;
};

export default ArticlesFetcher;