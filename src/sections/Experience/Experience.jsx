import Section from '../../components/Section/Section'
import Tag from '../../components/Tag/Tag'
import { experiences } from '../../data/experiences'
import styles from './Experience.module.css'

function Experience() {
  return (
    <Section id="experiencia" title="Experiência profissional" alt>
      <ol className={styles.timeline}>
        {experiences.map((exp) => (
          <li key={`${exp.company}-${exp.period}`} className={styles.item}>
            <article className={styles.card}>
              <header className={styles.header}>
                <div>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <p className={styles.company}>{exp.company}</p>
                </div>
                <div className={styles.meta}>
                  <span className={styles.period}>{exp.period}</span>
                  <span>{exp.location}</span>
                </div>
              </header>
              <p className={styles.summary}>{exp.summary}</p>
              <ul className={styles.highlights}>
                {exp.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <ul className={styles.techs} aria-label="Tecnologias">
                {exp.techs.map((t) => (
                  <li key={t}>
                    <Tag icon>{t}</Tag>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export default Experience
