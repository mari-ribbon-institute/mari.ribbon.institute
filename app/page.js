import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import AboutSection from "./components/AboutSection";
import ApplicationSection from "./components/ApplicationSection";
import TeamSection from "./components/TeamSection";
import WebsiteSection from "./components/WebsiteSection";
import GuidelineSection from "./components/GuidelineSection";

export default function Home() {
  return (
    <main>
      <div className={styles.header}>
        <div className={styles.logo_wrapper}>
          <Image
            className={styles.logo}
            src='/logo.png'
            width={350}
            height={350}
          />
          <div className={styles.ribbon_wrapper}>
            <Image
              className={styles.ribbon}
              src='/ribbon.png'
              width={30}
              height={80}
            />
          </div>
        </div>
        <div className={styles.header_wrapper}>
          <h1 className={styles.mari}>Mari</h1>
          <p>
            a software company
          </p>
        </div>
      </div>

      <hr />

      <div className={styles.nav_wrapper}>
        <ul>
          <li>
            About
          </li>
          <li>
            Applications
          </li>
          <li>
            Websites
          </li>
          <li>
            Guidelines
          </li>
          <li>
            Team
          </li>
        </ul>
      </div>

      <hr />

      <div className={styles.contents_wrapper}>
        
        <AboutSection />
        <ApplicationSection />
        <WebsiteSection />
        <GuidelineSection />
        <TeamSection />
      </div>

    </main>
  );
}