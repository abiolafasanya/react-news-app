import { useEffect, useState } from "react";
import ArticleCard from "../components/common/ArticleCard";
import { useFetchMutation } from "../store/slices/articleSlice";
import { Article } from "../types";
import { Container } from "@mui/material";

const Sport = () => {
  const [fetch, { isLoading }] = useFetchMutation();
  const [articles, setArticles] = useState([] as Article[]);
  useEffect(() => {
    const getSport = async () => {
      const data = await fetch({url: 'sports'}).unwrap();
      setArticles(data); return
    };
    getSport().then(data => data)
  }, [fetch]);
  return (
    <Container>
      <h2 className="text-xl font-semibold mt-5">Sport Headlines</h2>
      <div className="mt-4 mb-14 grid grid-cols-3 gap-5">
        {articles.length > 0 && articles.map((article) => (
          <ArticleCard
            key={article.id || article.title}
            article={article}
            isLoading={isLoading}
            pathName="sports"
          />
        ))}
      </div>
    </Container>
  );
};

export default Sport;
