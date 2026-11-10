import styles from './Section.module.css'

function Section({ id, title, alt = false, children }) {
  return (
    <section id={id} className={`${styles.section} ${alt ? styles.alt : ''}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </div>
    </section>
  )
}

export default Section
