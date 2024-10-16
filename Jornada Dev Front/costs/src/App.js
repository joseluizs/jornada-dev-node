import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';

import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/"><Home /></Route>
          <Route path="/projects"><Projects /></Route>
          <Route path="/company"><Company /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="/newproject"><NewProject /></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
