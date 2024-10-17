import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>Welcome to <span>Costs</span></h1>
      <p>This is a simple application to track your expenses.</p>
      <LinkButton to="/newproject" text="Criar Projeto" />
      <img src={savings} alt="Costs" />
    </section>
  )
}

export default Home