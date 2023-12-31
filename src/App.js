import { Container } from 'react-bootstrap';
import PageNotFound from './components/pages/PageNotFound/PageNotFound.js';
import About from './components/pages/About/About.js';
import Categories from './components/pages/Categories/Categories.js';
import Home from './components/pages/Home/Home.js';
import Post from './components/views/Post/Post.js';
import AddPost from './components/pages/AddPost/AddPost.js';
import EditPost from './components/features/EditPost/EditPost.js';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/views/Footer/Footer.js';
import Header from './components/views/Header/Header.js';
import PostsList from './components/views/PostsList/PostsList.js';
const App = () => {
  return (
    <main>
      <Container>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/category/:name"
            element={<PostsList filterPosts={true} />}
          />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/add" element={<AddPost />} />
          <Route path="/post/edit/:id" element={<EditPost />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
};

export default App;
