import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import PackingList from "./Pages/PackingList";
import TravelMap from "./Pages/TravelMap";
import PageNotFound from "./Pages/PageNotFound";
import CityList from "./Components/CityList";
import CountriesList from "./Components/CountriesList";
import City from "./Components/City";
import Form from "./Components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="packinglist" element={<PackingList />} />
          <Route path="packinglist" element={<PackingList />} />
          <Route path="travelmap" element={<TravelMap />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />

            <Route path="countries" element={<CountriesList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
