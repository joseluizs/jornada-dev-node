import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Condicional from './components/Condicional';
import Evento from './components/Evento';
import Form from './components/Form';
import Navbar from './components/layout/Navbar';
import Lista from './components/Lista';
import Saudacao from './components/Saudacao';
import SeuNome from './components/SeuNome';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Home from './pages/Home';
import Footer from './components/layout/Footer';

function App() {

  const meusItens = ['React', 'Vue', 'Angular']

  const [nome, setNome] = useState()
  return (
    <div className="App">
      <h1>Teste Eventos</h1>
      <Evento />
      <Form />

      <h1>Evento Condicional</h1>
      <Condicional />

      <h1>Renderização de Listas</h1>
      <Lista itens={meusItens} />
      <Lista itens={[]} />

      <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} />

      <h1>React Router</h1>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  )
}

export default App;
