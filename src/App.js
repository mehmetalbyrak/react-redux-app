import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { getCountry } from "./redux/features/country/countrySlice";

function App() {
  const dispatch = useDispatch();

  const { country } = useSelector((state) => state.country);

  useEffect(() => {
    dispatch(getCountry());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Countries</h1>
      <ul>
        {country.map((countryItem, index) => (
          <li key={index}>{countryItem.name.common}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
