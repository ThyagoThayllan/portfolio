import { profile } from '../../data/profile'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  )
}

export default Footer
