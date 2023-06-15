// import Container from './components/common/Container/Container.js';
import { Container } from 'react-bootstrap';
import PageNotFound from './components/pages/PageNotFound/PageNotFound.js';
import About from './components/pages/About/About.js';
import Home from './components/pages/Home/Home.js';
import Post from './components/views/Post/Post.js';
import AddPost from './components/features/AddPost/AddPost.js';
import EditPost from './components/features/EditPost/EditPost.js';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/views/Footer/Footer.js';
import Header from './components/views/Header/Header.js';
const App = () => {
  return (
    <main>
      <Container>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
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
