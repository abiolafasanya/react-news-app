import { useState, useEffect } from "react";
import { useHeadlinesMutation } from "../../../store/slices/articleSlice";
import { Article } from "../../../types";
import ArticleCard from "../ArticleCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';


const Headlines: React.FC = () => {
  const [articles, setArticle] = useState<Article[]>([]);
  const [articlesData, {isLoading}] = useHeadlinesMutation();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await articlesData({}).unwrap();
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

      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        slidesPerGroup={1}
        breakpoints={breakpoints}
      >
        {articles.length > 0 &&
          articles.map((article) => (
            <SwiperSlide key={article.id} className="flex">
              <ArticleCard article={article} isLoading={isLoading} pathName="article"/>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

const breakpoints = {
  320: {
    slidesPerView: 1,
    slidesPerGroup: 1,
  },
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 3,
    },
}

export default Headlines;
