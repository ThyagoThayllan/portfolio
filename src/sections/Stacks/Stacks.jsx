import { FaCode } from 'react-icons/fa'
import Section from '../../components/Section/Section'
import { stacks } from '../../data/stacks'
import { techIcons } from '../../data/techIcons'
import styles from './Stacks.module.css'

const fallback = { Icon: FaCode, color: '#93a1bb' }

function Stacks() {
  return (
    <Section id="stacks" title="Principais stacks">
      <div className={styles.grid}>
        {stacks.map((group) => (
          <article key={group.category} className={`${styles.card} ${styles[group.size] ?? ''}`}>
            <h3 className={styles.category}>{group.category}</h3>
            <ul className={styles.items}>
              {group.items.map((name) => {
                const { Icon, color } = techIcons[name] ?? fallback
                return (
                  <li key={name} className={styles.tile}>
                    <Icon className={styles.tileIcon} style={{ color }} aria-hidden="true" />
                    <span>{name}</span>
                  </li>
                )
              })}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Stacks
