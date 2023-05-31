import { Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useArticlesMutation } from "../../../store/slices/articleSlice";
import { Article } from "../../../types";
import  { Facebook } from 'react-content-loader'

type Data = {
  general: Article[],
  guardians: Article[],
  nytimes: Article[],
}

const Featured: React.FC = () => {
  const [articles, setArticle] = useState<Article[]>([]);
  const [step, setStep] = useState<number>(0);
  const [articlesData, {isLoading}] = useArticlesMutation();

  const handleNextStep = () => {
    if (step < articles.length - 1) {
      setStep((prevStep) => prevStep + 1);
    } else {
      setStep(0);
    }
  };

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data: Data = await articlesData({}).unwrap();
        setArticle(data.general);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticle();
  }, [articlesData]);

  return (
    <>
    {isLoading ? <Facebook /> : <div className="w-full pt-14">
      {articles?.length > 0 && (
        <Box className="flex sm:flex-col lg:flex-row gap-5 justify-between">
          <div className="lg:w-1/2">
            <img
              src={articles[step]?.image}
              loading="lazy"
              alt={articles[step]?.title}
              className="rounded-md object-cover object-center h-full w-full"
            />
          </div>

          <div
            className="relative lg:w-1/2 bg-white rounded-md shadow-sm p-5"
            key={articles[step].title}
          >
            <h2 className="text-2xl mb-5">{articles[step]?.title}</h2>
            <p>{articles[step]?.description}</p>
            <div className="mt-5">
              <span>{articles[step]?.source}</span>
            </div>
            <div className="h-12 w-full flex">
              <div className="ml-auto">
                <Button color="error" onClick={handleNextStep}>
                  Next
                </Button>
              </div>
            </div>
          </div>
        </Box>
      )}
    </div>}
    </>
  );
};

export default Featured;
