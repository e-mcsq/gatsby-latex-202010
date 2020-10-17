import {Section} from "../Section";
import React, {Fragment} from "react";
import styles from "./ProfessionalDevelopments.module.scss"
import {graphql, useStaticQuery} from "gatsby";
import {ProfessionalDevelopments as ProfessionalDevelopmentsIF} from "../../__generated__/json-schemata";

export const ProfessionalDevelopments = () => {
  const data = useStaticQuery(graphql`
      query Fortbildungen {
      dataYaml(title: { eq: "Training courses" }) {
          title
          description
          content {
            date(formatString: "YYYY")
            title
            description
            organizer {
              company
              speaker
            }
          }
        }
      }
    `)

  const pds: ProfessionalDevelopmentsIF = data.dataYaml

  return (
    <Section
      id={pds.title.toLowerCase()}
      title={pds.title}
      navigation>
      <div className="alternative">
        <p>{pds?.description}</p>
      </div>
      <div className={styles.grid}>
        <div className={styles.rowHeader}>Date</div>
        <div className={styles.rowHeader}>Type</div>
        <div className={styles.rowHeader}>Organizer</div>
        {
          pds.content.map((development, idx) => {
            return (
              <Fragment key={idx}>
                <div className={styles.date}>{development.date}</div>
                <div className={styles.title}>{development.title}</div>
                <div className={styles.company}>{development.organizer.company}</div>
                <div className={styles.description} dangerouslySetInnerHTML={{__html: development.description || " "}}/>
                <div className={styles.speaker}>{development.organizer?.speaker || " "}</div>
              </Fragment>
            )
          })
        }
      </div>
    </Section>
  )
}
