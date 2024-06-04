import PageNav from "../Components/PageNav";
import Sidebar from "../Components/Sidebar";
import Map from "../Components/Map";
import styles from "./TravelMap.module.css";
/*eslint-disable*/
function TravelMap() {
  return (
    <div className={styles.travelMap}>
      <PageNav />
      <div className={styles.container}>
        <Sidebar />
        <Map />
      </div>
    </div>
  );
}

export default TravelMap;
