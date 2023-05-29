import { useState, useEffect } from "react";
import { useHeadlinesMutation } from "../../../store/slices/articleSlice";
import { Article } from "../../../types";
import ArticleCard from "../ArticleCard";

const Headlines: React.FC = () => {
  const [articles, setArticle] = useState<Article[]>([]);
  const [articlesData] = useHeadlinesMutation();


  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const { data } = await articlesData({}).unwrap();
        setArticle(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticle();
  }, [articlesData]);

  return (
    <div className="w-full pt-14">
      <h2 className="text-xl my-4 font-semibold">Headlines</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5">
        {articles.length > 0 &&
          articles.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
      </div>
    </div>
  );
};

export default Headlines;
