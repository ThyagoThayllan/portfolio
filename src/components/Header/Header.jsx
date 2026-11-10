import { profile } from '../../data/profile'
import styles from './Header.module.css'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#stacks', label: 'Stacks' },
  { href: '#formacao', label: 'Formação' },
  { href: '#contato', label: 'Contato' },
]

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#inicio" className={styles.brand}>
          <span>&lt;</span>
          {profile.shortName.replace(' ', '')}
          <span> /&gt;</span>
        </a>
        <nav aria-label="Principal">
          <ul className={styles.nav}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
