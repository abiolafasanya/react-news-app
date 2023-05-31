import { useEffect, useState } from "react";
import ArticleCard from "../components/common/ArticleCard";
import { useFetchMutation } from "../store/slices/articleSlice";
import { Article } from "../types";
import { Container } from "@mui/material";
import { storeToLocalStorage } from "../utils/storage";

const Page = ({pathName}: {pathName: string}) => {
  const [fetch, { isLoading }] = useFetchMutation();
  const [articles, setArticles] = useState([] as Article[]);
  useEffect(() => {
    const getSport = async () => {
      const data = await fetch({url: pathName}).unwrap();
      storeToLocalStorage(pathName, data);
      setArticles(data); return
    };
    getSport().then(data => data)
  }, [fetch, pathName]);
  return (
    <Container>
      <h2 className="text-xl font-semibold mt-5 capitalize">{pathName} Headlines</h2>
      <div className="mt-4 mb-14 grid grid-cols-3 gap-5">
        {articles.length > 0 && articles.map((article) => (
          <ArticleCard
            key={article.id || article.title}
            article={article}
            isLoading={isLoading}
            pathName={pathName}
          />
        ))}
      </div>
    </Container>
  );
};

export default Page;
