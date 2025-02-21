import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Logdyn Home IT</h1>
        <p>Direct-to-you Home IT Support, based in Dorset</p>
        <ul>
          <li>General troubleshooting</li>
          <li>New computer / general hardware setup</li>
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
          <p><b>contact@logdyn.com</b></p>
          <p>(+44) 07983 477 256</p>
        </ div>
      </main>
      <footer className={styles.footer}>
        <a className="fa fa-facebook" href="https://www.facebook.com/people/Logdyn-Home-Tech-Support/61573207387819/" target="_blank" rel="noopener noreferrer"></a>
        <a className="fa fa-whatsapp" href="https://api.whatsapp.com/send?phone=%2B447349276012" target="_blank" rel="noopener noreferrer"></a>
        <a className="fa fa-envelope" href="mailto:contact@logdyn.com" target="_blank" rel="noopener noreferrer"></a>
      </footer>
    </div>
  );
}
