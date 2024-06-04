import { useNavigate, useParams } from "react-router-dom";
import styles from "./City.module.css";
import { useEffect } from "react";
import { useCities } from "../contexts/CitiesContext";
import Button from "./Button";
/*eslint-disable*/
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getCity, currentCity } = useCities();
  useEffect(
    function () {
      getCity(id);
    },
    [id]
  );
  const { cityName, emoji, date, notes } = currentCity;
  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name:</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
        <div>
          <h6>Visited date:</h6>
          <p>{formatDate(date || null)}</p>
        </div>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Notes & Memories:</h6>
          <p>{notes}</p>
        </div>
      )}

      <div>
        <Button type="back" onClick={() => navigate(-1)}>
          Back
        </Button>
      </div>
    </div>
  );
}

export default City;
