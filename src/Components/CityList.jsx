import styles from "./CityList.module.css";
import Spinner from "../Components/Spinner";
import CityItem from "./CityItem";
import { useCities } from "../contexts/CitiesContext";
/*eslint-disable*/
function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length) return <h2>Add city by clicking map.</h2>;
  return (
    <div className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </div>
  );
}

export default CityList;
