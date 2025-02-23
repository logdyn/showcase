import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./page.module.css";
import { faFacebookSquare, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Logdyn Home IT</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.tagline}>
          <p>Direct-to-you</p>&nbsp;<p>Home IT Support,</p>&nbsp;<p>based in Dorset</p>
        </div>
        <ul className={styles.services}>
          <li>General troubleshooting</li>
          <li>
            <div>
              <p>New computer / </p><p>general hardware setup</p>
            </div>
          </li>
          <li>Printer setup & support</li>
          <li>Password management setup</li>
          <li>Virus scanning</li>
          <li>Cloud storage & backup setup</li>
          <li>Upgrade advice</li>
          <li>Device and software upgrades</li>
        </ul>
        <div className={styles.content}>
          <p><b>No fix? No fee!</b></p>
          <p><b>Enquiries welcome</b></p>
        </ div>
        <div className={styles.content}>
          <p>Jake Lewis</p>
          <p><a href="mailto:contact@logdyn.com" target="_blank" rel="noopener noreferrer"><b>contact@logdyn.com</b></a></p>
          <p><a href="tel:+447983477256">(+44) 07983 477 256</a></p>
        </ div>
      </main>
      <footer className={styles.footer}>
        <a href="https://www.facebook.com/people/Logdyn-Home-Tech-Support/61573207387819/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookSquare} className={styles.facebookLink}/>
        </a>
        <a href="https://api.whatsapp.com/send?phone=%2B447349276012" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsappSquare} className={styles.whatsappLink}/>
        </a>
        <a href="mailto:contact@logdyn.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelopeSquare} className={styles.emailLink}/>
        </a>
      </footer>
    </div>
  );
}
