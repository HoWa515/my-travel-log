import styles from "./Sidebar.module.css";
import MapNav from "../Components/MapNav";
import { Outlet } from "react-router-dom";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <MapNav />
      <Outlet />
    </div>
  );
}

export default Sidebar;
