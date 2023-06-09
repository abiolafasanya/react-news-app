import { useState, useEffect } from "react";
import { useHeadlinesMutation } from "../store/slices/articleSlice";
import { Article as ArticleType } from "../types";
import ArticleCard from '../components/common/ArticleCard';
import { useParams } from "react-router-dom";

const Articles: React.FC = () => {
  const [articles, setArticle] = useState<ArticleType[]>([]);
  const [articlesData, {isLoading}] = useHeadlinesMutation();
  const {query} = useParams();


  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await articlesData({query}).unwrap();
        setArticle(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticle();
  }, [articlesData, query]);

  return (
    <div className="w-full pt-14">
      <h2 className="text-xl my-4 font-semibold">{}</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5">
        {articles.length > 0 &&
          articles.map((article) => (
            <ArticleCard key={article.id} article={article} isLoading={isLoading} />
          ))}
      </div>
    </div>
  );
};

export default Articles;
