import { FaInstagram, FaLinkedin, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li><FaLinkedin /></li>
        <li><FaWhatsapp /></li>
        <li><FaXTwitter /></li>
        <li><FaInstagram /></li>
      </ul>
      <p className={styles.copy_right}><span>Costs</span> &copy; 2024</p>
    </footer>
  )
}

export default Footer