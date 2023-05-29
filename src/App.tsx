import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Home from './pages/Home';

const App = () => {
  return (
    <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/article" element={<Article />} />

      {/* <Route path="*" element={<Movies />} /> */}
    </Route>
    </Routes>
  )
}

export default App