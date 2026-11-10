import Section from '../../components/Section/Section'
import { profile } from '../../data/profile'
import styles from './Contact.module.css'

const contacts = [
  { label: 'E-mail', value: profile.links.email, href: `mailto:${profile.links.email}` },
  { label: 'LinkedIn', value: 'thyagothayllan', href: profile.links.linkedin },
  { label: 'GitHub', value: 'ThyagoThayllan', href: profile.links.github },
  { label: 'WhatsApp', value: 'Chamar no WhatsApp', href: profile.links.whatsapp },
]

function Contact() {
  return (
    <Section id="contato" title="Contato">
      <p className={styles.lead}>Vamos conversar? Escolha o canal que preferir.</p>
      <ul className={styles.grid}>
        {contacts.map((c) => (
          <li key={c.label}>
            <a
              className={styles.card}
              href={c.href}
              {...(c.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              <span className={styles.label}>{c.label}</span>
              <span className={styles.value}>{c.value}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Contact
