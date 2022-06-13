import Translate from "@docusaurus/Translate";
import clsx from "clsx";
import { Icons, SubTitle } from "nupes-ui";
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
    </div>
    {percentage && sourceLink && (
      <Text>
        <a
          href={sourceLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ProgLink}
        >
          <Translate
            id="compareProgram.pourcentageFavorable"
            values={{
              percentage: (
                <strong className={styles.percent}>{percentage}%</strong>
              ),
            }}
          >
            {"Vous êtes {percentage} à y être favorables."}
          </Translate>
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
      </div>
      <ProgramLine
        title={<Translate>Augmenter le SMIC à 1500 €</Translate>}
        subTitle={<Translate>et accompagner les TPE/PME</Translate>}
        percentage={92}
        sourceLink="https://www.latribune.fr/economie/france/les-francais-sont-favorables-a-une-augmentation-du-smic-814493.html"
      />
      <ProgramLine
        title={
          <Translate>
            Réduire de 65% les gaz à effet de serre d'ici à 2030
          </Translate>
        }
        subTitle={<Translate>et instaurer un ISF climatique</Translate>}
        percentage={77}
        sourceLink="https://www.lejdd.fr/Politique/sondage-77-des-francais-souhaitent-le-retablissement-de-lisf-3833072"
      />
      <ProgramLine
        title={<Translate>La retraite à 60 ans</Translate>}
        subTitle={
          <Translate>et porter le minimum vieillesse à 1063 €</Translate>
        }
        percentage={71}
        sourceLink="https://www.ifop.com/wp-content/uploads/2022/02/118876-Rapport.pdf"
      />
      <ProgramLine
        title={<Translate>Le plein à 1,40 € le litre</Translate>}
        subTitle={
          <Translate>
            et bloquer le prix des produits de premières nécessité
          </Translate>
        }
        percentage={88}
        sourceLink="https://www.bfmtv.com/economie/replay-emissions/faire-reussir-la-france/blocage-des-prix-hausse-du-smic-retour-de-l-isf-que-pensent-les-francais-des-propositions-economiques-de-jean-luc-melenchon_AN-202111040408.html"
      />
      <ProgramLine
        title={<Translate>Arrêter les pesticides</Translate>}
        subTitle={
          <Translate>
            et accompagner financièrement les agriculteurs à la transition
          </Translate>
        }
        percentage={81}
        sourceLink="https://www.reussir.fr/plus-de-4-francais-sur-5-seraient-favorables-linterdiction-des-pesticides-les-plus-dangereux"
      />
      <ProgramLine
        title={
          <Translate>Instaurer un Référendum d’Initiative Citoyenne</Translate>
        }
        subTitle={
          <Translate>
            reconnaître le vote blanc et instaurer une 6e République
          </Translate>
        }
        percentage={73}
        sourceLink="https://www.ifop.com/wp-content/uploads/2022/02/118859_PPT_RIC_2022.02.07.pdf"
      />
      <ProgramLine
        title={
          <Translate>Rouvrir les lignes ferroviaires du quotidien</Translate>
        }
        subTitle={
          <Translate>
            avec un plan national de soutien massif au développement des
            transports collectifs
          </Translate>
        }
        percentage={80}
        sourceLink="https://reseauactionclimat.org/regionales-le-train-maillon-essentiel-de-la-mobilite-locale/"
      />
      <ProgramLine
        title={<Translate>Reconstruire l’hôpital public</Translate>}
        subTitle={
          <Translate>
            rouvrir des services d’urgences et mettre fin à la tarification à
            l’acte
          </Translate>
        }
        percentage={81}
        sourceLink="https://www.lefigaro.fr/sciences/les-francais-et-les-soignants-sont-inquiets-pour-l-avenir-de-l-hopital-20220516"
      />
      <ProgramLine
        title={
          <Translate>
            Créer une allocation d’autonomie pour les jeunes
          </Translate>
        }
        subTitle={
          <Translate>
            fixée au-dessus du seuil de pauvreté soit 1063 euros / mois
          </Translate>
        }
      />
    </>
  );
};

export default CompareProgram;
