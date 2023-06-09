import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Article as ArticleType } from '../types';
import { useHeadlinesMutation } from '../store/slices/articleSlice';
import { Button, Container } from '@mui/material';
import { formatDate } from '../utils/formatter';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import  { Facebook } from 'react-content-loader'

const Article = () => {
  const { title } = useParams();
  const [article, setArticle] = useState({} as ArticleType);
  const [articlesData, {isLoading}] = useHeadlinesMutation();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await articlesData({}).unwrap() as ArticleType[];
        const result = data.find((article) => article.title === title)as ArticleType;
        setArticle(result)
      } catch (error) {
        if(error instanceof Error) {
          console.log(error.message);
        }
      }
    };
    fetchArticle();
  }, [articlesData, title]);

  return (
    <Container className='my-10'>
      <Link to="/"><Button><KeyboardBackspaceIcon /></Button></Link>
      {isLoading ? <Facebook /> : <div className='mt-4'>
        <picture>
          <img src={article?.image} alt={article.title} loading="lazy" />
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

export default Article;
