import { Box } from "@mui/material";
import { Article } from "../../types";
import NoImage from "../../assets/NoImage.jpg";
import { Link } from "react-router-dom";
import { Facebook } from "react-content-loader";
import NoImageAlt from "./NoImage";

interface CardProps {
  article: Article;
  isLoading?: boolean;
  pathName?: string;
}

const ArticleCard: React.FC<CardProps> = ({ article, isLoading, pathName }) => {
  const styles = {
    box: "flex flex-col shadow-md",
    articleImg: "object-cover object-center w-full",
    info: "relative bg-white rounded-b-md p-4 md:h-[220px]",
    infoTitle: " font-semibold mb-3 line-clamp-2",
    infoDesc: "text-gray-500 text-sm mb-5 line-clamp-3",
    infoMeta: "mt-4 text-sm flex items-center justify-between",
    infoLink: "text-blue-500 text-base capitalize",
  };
  return (
    <>
      {isLoading ? (
        <Facebook className="md:h-[200px]" />
      ) : (
        <Box className={styles.box}>
          <div className="md:h-[200px]">
            {article?.image ? (
              <img
                src={article?.image}
                loading="lazy"
                alt={article?.title}
                className={styles.articleImg}
              />
            ) : (
              <img src={NoImage} alt={article?.title} /> ?? (
                <NoImageAlt title={article?.title} />
              )
            )}
          </div>

          <div className={styles.info}>
            <h2 className={styles.infoTitle}>{article?.title}</h2>
            <p className={styles.infoDesc}>{article?.description}</p>
            <div className={styles.infoMeta}>
              <span>Source: {article?.source}</span>
              <Link
                to={`/${pathName}/${article?.title}`}
                className={styles.infoLink}
              >
                Read
              </Link>
            </div>
          </div>
        </Box>
      )}
    </>
  );
};

export default ArticleCard;
