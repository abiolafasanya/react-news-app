import { Box, Button } from "@mui/material";
import { useState } from "react";
import { Article } from "../../types";
import NoImage from "./NoImage";

interface CardProps {
  article: Article;
}

const ArticleCard: React.FC<CardProps> = ({ article }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleNextClick = () => {
    setIsVisible(false);
  };

  return (
    <Box
      className="flex flex-col shadow-md"
      sx={{ display: isVisible ? "flex" : "none" }}
    >
      <div className="md:h-[200px]">
        {article?.urlToImage ? <img
          src={article?.urlToImage}
          loading="lazy"
          alt={article?.title}
          className=" object-cover object-center w-full"
        />: <NoImage title={article.title}/>}
      </div>

      <div className="relative bg-white rounded-b-md p-4 md:h-[220px]">
        <h2 className=" font-semibold mb-3 line-clamp-2">{article?.title}</h2>
        <p className="text-gray-500 text-sm mb-5 line-clamp-3">{article?.description}</p>
        <div className="mt-4 text-sm">
          <span>Source: {article?.source?.name}</span>
        </div>
        <div className="absolute bottom-0 right-2 w-full flex items-center">
          <div className="ml-auto">
            <Button onClick={handleNextClick}>read</Button>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ArticleCard;