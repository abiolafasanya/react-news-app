import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Article as ArticleType } from '../types';
import { Button, Container } from '@mui/material';
import { formatDate } from '../utils/formatter';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import  { Facebook } from 'react-content-loader'
import { getStorageItem } from '../utils/storage';
import NoImage from '../assets/NoImage.jpg'

const SearchArticle = ({pathName}: {pathName: string}) => {
  const { title } = useParams();
  const [article, setArticle] = useState({} as ArticleType);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const fetchArticle = () => {
      try {
        const data = getStorageItem(pathName);
        console.log(data)
        const result = data?.find((item: ArticleType) => {
          return item.title === title;
        });
        setArticle(result)
        setIsLoading(false)
      } catch (error) {
        if(error instanceof Error) {
          console.log(error.message);
        }
      }
    };
    fetchArticle();
  }, [pathName, title]);

  return (
    <Container className='my-10'>
      <Link to="/"><Button><KeyboardBackspaceIcon /></Button></Link>
      {isLoading ? <Facebook /> : <div className='mt-4'>
        <picture>
          <img src={article?.image ?? NoImage} alt={article.title} loading="lazy" />
        </picture>
        <div className='bg-white p-5 rounded-b shadow-sm'>
          <h3 className='text-xl font-semibold'>{article?.title}</h3>
          <p>{article?.description}</p>
          <p>{article?.content}</p>
          <div>{article?.content}</div>
          <div className='flex justify-between flex-wrap my-2'>
          <span> Source: <b className='text-red-500'>{article?.source}</b></span>
          <span className='text-red-500'> {article?.publishedAt && formatDate(article?.publishedAt)}</span>
          </div>
        </div>
      </div>}
    </Container>
  );
};

export default SearchArticle;
