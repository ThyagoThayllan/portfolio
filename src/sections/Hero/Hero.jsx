import { profile } from '../../data/profile'
import { techIcons } from '../../data/techIcons'
import foto from '../../assets/thyagothayllan.jpg'
import styles from './Hero.module.css'

const highlights = [
  { value: '2 anos', label: 'de experiência Full Stack' },
  { value: '4', label: 'empresas e projetos' },
  { value: 'End-to-end', label: 'do banco à interface' },
]

const mainStacks = [
  'Python',
  'Django',
  'JavaScript',
  'React',
  'jQuery',
  'Node.js',
  'Express',
  'Java',
  'AWS',
  'PostgreSQL',
]

function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <div className={styles.photoWrap}>
            <img className={styles.photo} src={foto} alt={`Foto de ${profile.shortName}`} />
          </div>
          <p className={styles.prompt}>
            <span>&gt;</span> olá, mundo! eu sou
          </p>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.role}>
            {profile.role}
            <span className={styles.cursor} aria-hidden="true" />
          </p>
          <p className={styles.badge}>{profile.experience}</p>
          <div className={styles.actions}>
            <a className={styles.primary} href={profile.resumeUrl} download>
              Baixar currículo
            </a>
            <a className={styles.secondary} href="#contato">
              Entrar em contato
            </a>
          </div>
        </div>

        <div id="sobre" className={styles.about}>
          <div className={styles.windowBar} aria-hidden="true">
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
          <div className={styles.aboutBody}>
            <h2 className={styles.aboutTitle}>Sobre mim</h2>
            <p className={styles.aboutText}>Desenvolvedor Full Stack com 2 anos de experiência desenvolvendo soluções completas end-to-end, desde a modelagem de banco de dados até interfaces responsivas.</p>
            <br />
            <p className={styles.aboutText}>Especializado em desenvolver e integrar APIs RESTful e GraphQL, implementar features de ponta a ponta e otimizar performance de aplicações web.</p>
            <br />
            <p className={styles.aboutText}>Experiência em ambientes ágeis de startups, entregando código limpo e testado, com foco em resolver problemas de negócio através de soluções técnicas eficientes.</p>
            <ul className={styles.stats}>
              {highlights.map((item) => (
                <li key={item.label} className={styles.stat}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
            <h3 className={styles.stackTitle}>Stacks principais</h3>
            <ul className={styles.stackGrid}>
              {mainStacks.map((name) => {
                const { Icon, color } = techIcons[name]
                return (
                  <li key={name} className={styles.stackItem}>
                    <Icon className={styles.stackIcon} style={{ color }} aria-hidden="true" />
                    <span>{name}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
