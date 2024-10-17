import { useNavigate } from 'react-router-dom';
import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css';

function NewProject() {
  const navigate = useNavigate();

  function createPost(project) {
    // Inicializa o custo e os serviços
    project.cost = 0;
    project.services = [];

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        navigate('/projects', { state: { message: 'Projeto criado com sucesso!' } });
      })
      .catch((err) => console.error('Erro ao criar o projeto:', err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Create Project</h1>
      <p>Create your project for add of services</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
}

export default NewProject;
