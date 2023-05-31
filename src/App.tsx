import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Sports from './pages/Sports';
import Page from './pages/Page';
import SearchArticle from './pages/SearchArticle';
// import UserPreferenceComponent from './pages/Preference';

const App = () => {
  return (
    <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/article/:title" element={<Article />} />

      <Route path="/search/:title" element={<SearchArticle pathName='search'/>} />

      <Route path="/tech" element={<Page pathName="tech" />} />
      <Route path="/tech/:title" element={<SearchArticle pathName='tech'/>} />

      <Route path="/politics" element={<Page pathName="politics" />} />
      <Route path="/politics/:title" element={<SearchArticle pathName='politics'/>} />
      
      <Route path="/sports" element={<Page pathName="sports" />} />
      <Route path="/sports/:title" element={<SearchArticle pathName='sports'/>} />
      
      <Route path="/business" element={<Page pathName="business" />} />
      <Route path="/business/:title" element={<SearchArticle pathName='business'/>} />


    </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App