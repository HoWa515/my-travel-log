import Spinner from "../Components/Spinner";
import { useCities } from "../contexts/CitiesContext";
import styles from "./CountriesList.module.css";
import CountryItem from "./CountryItem";
/*eslint-disable*/
function CountriesList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length) return <h2>Add city by clicking map.</h2>;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
  }, []);

  return (
    <ul className={styles.countriesList}>
      {countries.map((country) => (
        <CountryItem country={country} />
      ))}
    </ul>
  );
}

export default CountriesList;
