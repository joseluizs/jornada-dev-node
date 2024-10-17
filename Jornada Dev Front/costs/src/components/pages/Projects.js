import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Message from '../layout/Message';
import styles from './Projects.module.css';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import ProjectCard from '../project/ProjectCard';

function Projects() {
  const [projects, setProjects] = useState([]);
  const location = useLocation();
  const message = location.state?.message || '';

  useEffect(() => {
    fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error('Erro ao carregar projetos:', err));
  }, []);

  const handleRemove = (id) => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id));
      })
      .catch((err) => console.error('Erro ao remover projeto:', err));
  };

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>My Projects</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              handleRemove={handleRemove}
            />
          ))}
      </Container>
    </div>
  );
}

export default Projects;
