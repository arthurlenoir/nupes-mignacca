import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
//import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { Text, Title } from "nupes-ui";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Julia Mignacca · Élections Législatives 2022 · 3ème circonscription de l'Hérault"
      description="Julia Mignacca : candidate sur la 3ème circonscription de l'Hérault pour la Nouvelle Union Populaire Écologique et Sociale NUPES."
    >
      <Title>Julia Mignacca</Title>
      <Text>
        Les 12 et 19 juin prochains ont lieu les élections législatives, le
        troisième tour de l'élection présidentielle qui permettra d'élire vos
        députés et de choisir le prochain gouvernement. À cette occasion la
        gauche et les écologistes ont fait le choix historique de se présenter
        unis devant vous dans tout le pays. Je suis la candidate de cette
        nouvelle union sur notre 3ème circonscription de l'Hérault et j'en
        mesure toute la responsabilité. Face au changement climatique et à la
        casse du service public, ensemble nous pouvons gagner.
      </Text>
    </Layout>
  );
}
