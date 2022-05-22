import clsx from "clsx";
import { Highlight, Icons, SubTitle } from "nupes-ui";
import React from "react";
import Text from "../Text";
import styles from "./styles.module.css";

const ProgramLine: React.FC<{
  title: React.ReactNode;
  subTitle: React.ReactNode;
  percentage?: number;
  sourceLink?: string;
}> = ({ title, subTitle, percentage, sourceLink }) => (
  <>
    <div className={styles.ProgramLine}>
      <div className={styles.ColProg}>
        <SubTitle className={styles.ProgTitle}>{title}</SubTitle>
        <Text className={styles.ProgText}>{subTitle}</Text>
      </div>
      <div className={styles.ColCandidate}>
        <Icons.CheckIcon width={40} />
      </div>
      <div className={clsx(styles.ColCandidate, styles.OtherCandidate)}>
        <Icons.CrossIcon width={40} />
      </div>
      <div className={clsx(styles.ColCandidate, styles.OtherCandidate)}>
        <Icons.CrossIcon width={40} />
      </div>
    </div>
    {percentage && sourceLink && (
      <Text>
        <a href={sourceLink} target="_blank" className={styles.ProgLink}>
          Vous êtes <Highlight small>{percentage}%</Highlight> à y être
          favorables.
        </a>
      </Text>
    )}
  </>
);

const CompareProgram: React.FC = () => {
  return (
    <>
      <div className={styles.ProgramHeader}>
        <div className={styles.ColProg}></div>
        <div className={styles.ColCandidate}>
          <SubTitle>Julia Mignacca</SubTitle>
        </div>
        <div className={clsx(styles.ColCandidate, styles.OtherCandidate)}>
          <SubTitle>Macron</SubTitle>
        </div>
        <div className={clsx(styles.ColCandidate, styles.OtherCandidate)}>
          <SubTitle>Le RN</SubTitle>
        </div>
      </div>
      <ProgramLine
        title="Augmenter le SMIC à 1500 €"
        subTitle="et accompagner les TPE/PME"
        percentage={92}
        sourceLink="https://www.latribune.fr/economie/france/les-francais-sont-favorables-a-une-augmentation-du-smic-814493.html"
      />
      <ProgramLine
        title="La retraite à 60 ans"
        subTitle="et porter le minimum vieillesse à 1063 €"
        percentage={71}
        sourceLink="https://www.ifop.com/wp-content/uploads/2022/02/118876-Rapport.pdf"
      />
      <ProgramLine
        title="Le plein à 1,40 € le litre"
        subTitle="et bloquer le prix des produits de premières nécessité"
        percentage={88}
        sourceLink="https://www.bfmtv.com/economie/replay-emissions/faire-reussir-la-france/blocage-des-prix-hausse-du-smic-retour-de-l-isf-que-pensent-les-francais-des-propositions-economiques-de-jean-luc-melenchon_AN-202111040408.html"
      />
      <ProgramLine
        title="Arrêter les pesticides"
        subTitle="et accompagner financièrement les agriculteurs à la transition"
        percentage={81}
        sourceLink="https://www.reussir.fr/plus-de-4-francais-sur-5-seraient-favorables-linterdiction-des-pesticides-les-plus-dangereux"
      />
      <ProgramLine
        title="Instaurer un Référendum d’Initiative Citoyenne"
        subTitle="et reconnaître le vote blanc"
        percentage={73}
        sourceLink="https://www.ifop.com/wp-content/uploads/2022/02/118859_PPT_RIC_2022.02.07.pdf"
      />
      <ProgramLine
        title="Rouvrir les lignes ferroviaires du quotidien"
        subTitle="avec un plan national de soutien massif au développement des transports collectifs"
        percentage={80}
        sourceLink="https://reseauactionclimat.org/regionales-le-train-maillon-essentiel-de-la-mobilite-locale/"
      />
      <ProgramLine
        title="Reconstruire l’hôpital public"
        subTitle="rouvrir des services d’urgences et mettre fin à la tarification à l’acte"
        percentage={81}
        sourceLink="https://www.lefigaro.fr/sciences/les-francais-et-les-soignants-sont-inquiets-pour-l-avenir-de-l-hopital-20220516"
      />
      <ProgramLine
        title="En finir avec Parcoursup"
        subTitle="et supprimer la sélection à l’université"
      />
    </>
  );
};

export default CompareProgram;
