import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import { translate } from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";

import clsx from "clsx";
import styles from "./styles.module.css";

function TopBanner() {
  return (
    <div className={styles.topBannerTitleWrapper}>
      <span className={styles.topBannerTitleTextUp}>welcome to code</span>
      {/* {'🎉\xa0'} */}
      <span className={styles.topBannerTitleTextDown}>Documentation</span>
      {/* {'\xa0🥳'} */}
    </div>
  );
}

function HeroBanner() {
  return (
    <div className={styles.hero} data-theme="dark">
      <div className={`container ${styles.heroInner}`}>
        <Heading as="h1" className={styles.heroProjectTagline}>
          <img
            alt={translate({ message: "Docusaurus with Keytar" })}
            className={styles.heroLogo}
            src={useBaseUrl("/img/cothecraftz.png")}
            width="220"
            height="220"
          />
          <span
            className={clsx("md:leading-[65px]", styles.heroTitleTextHtml)}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: translate({
                id: "homepage.hero.title",
                message:
                  "Explore step-by-step <b>guides</b>, <b>references</b>, and <b>examples</b> code usage.",
                description: "Home page hero title, can contain simple html tags",
              }),
            }}
          />
        </Heading>
        <div className={styles.buttonDocs}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            📄️ Documentation
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageHeader(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header>
      <TopBanner />
      <HeroBanner />
    </header>
  );
}
