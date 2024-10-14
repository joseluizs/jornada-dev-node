import { FaInstagram, FaXTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa6";
import styles from './Footer.module.css'

function Footer() {

  return (
    <footer>
      <ul className={styles.social_list}>
        <li><FaInstagram /></li>
        <li><FaXTwitter /></li>
        <li><FaWhatsapp /></li>
        <li><FaLinkedin /></li>
      </ul>
      <p>
        Copyright 2024. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer