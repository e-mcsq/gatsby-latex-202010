import React, {CSSProperties, FunctionComponent} from "react";
import styles from './Section.module.scss'

interface SectionProps {
  customstyles?: CSSProperties
  id: string
  title: string
  subtitle?: string
  avoidPageBreak?: boolean
  navigation?: boolean
}

export const Section: FunctionComponent<SectionProps> = ({customstyles, id, title, subtitle, avoidPageBreak, navigation, children}) => {
  const navigationCssClass = navigation ? 'section-anchor' : ''
  const avoidPageBreakCssClass = avoidPageBreak ? styles.avoidPageBreak : ''

  // noinspection HtmlUnknownAnchorTarget
  return (
    <section
      id={id}
      className={`${styles.section} ${navigationCssClass} ${avoidPageBreakCssClass}`}
      style={{...customstyles}}
    >
      <header>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </header>
      <div className={styles.content}>
        {children}
        <div className={styles.navigateToTop}><a href="#top" style={{textDecoration: "none"}}>⇪ top</a></div>
      </div>
    </section>
  )
}
