import { techIcons } from '../../data/techIcons'
import styles from './Tag.module.css'

function Tag({ children, featured = false, icon = false }) {
  const tech = icon ? techIcons[children] : null

  return (
    <span className={`${styles.tag} ${featured ? styles.featured : ''}`}>
      {tech && <tech.Icon className={styles.icon} style={{ color: tech.color }} aria-hidden="true" />}
      {children}
    </span>
  )
}

export default Tag
