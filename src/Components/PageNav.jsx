import { Link } from "react-router-dom";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/packinglist">Packing List</Link>
        </li>
        <li>
          <Link to="/travelmap">Travel Map</Link>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
