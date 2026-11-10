import Section from '../../components/Section/Section'
import { education } from '../../data/education'
import styles from './Education.module.css'

function Education() {
  return (
    <Section id="formacao" title="Formação, cursos e idiomas" alt>
      <div className={styles.grid}>
        <article className={styles.card}>
          <h3>Formação</h3>
          <p className={styles.strong}>{education.degree.title}</p>
          <p>{education.degree.institution}</p>
          <p className={styles.muted}>{education.degree.status}</p>
        </article>
        <article className={styles.card}>
          <h3>Cursos complementares</h3>
          <ul className={styles.list}>
            {education.courses.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </article>
        <article className={styles.card}>
          <h3>Idiomas</h3>
          <ul className={styles.list}>
            {education.languages.map((l) => (
              <li key={l.name}>
                <span className={styles.strong}>{l.name}</span> · {l.level}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  )
}

export default Education
