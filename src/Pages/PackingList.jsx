import PageNav from "../Components/PageNav";
import PackList from "../Components/PackList";
import styles from "./PackingList.module.css";

function PackingList() {
  return (
    <div className={styles.packingList}>
      <PageNav />
      <PackList />
    </div>
  );
}

export default PackingList;
