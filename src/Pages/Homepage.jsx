import { Link } from "react-router-dom";
import PageNav from "../Components/PageNav";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          Travel makes life wonderful,
          <br />
          also enriches the soul.
        </h1>
        <h2>This app was developed by myself as a personal travel log.</h2>
        <Link to="/packinglist" className="cta">
          Prepare the luggage
        </Link>
        <Link to="/travelmap" className="cta">
          Tracking my destinations
        </Link>
      </section>
    </main>
  );
}
