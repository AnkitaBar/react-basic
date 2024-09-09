import React, { useState } from "react";

const countriesAndCapitals = [
  {
    country: "India",
    capital: "Delhi",
    id: 1,
  },
  {
    country: "England",
    capital: "London",
    id: 2,
  },
  {
    country: "Bangladesh",
    capital: "Dhaka",
    id: 3,
  },
  {
    country: "USA",
    capital: "Washington, D.C.",
    id: 4,
  },
  {
    country: "Pakistan",
    capital: "Islamabad",
    id: 5,
  },
];

const CountryPicker = () => {
  const [country, setCountry] = useState(1);
  const [city, setCity] = useState(countriesAndCapitals[0].capital);

  const handleCountryChange = (e) => {
    const selectedId = Number(e.target.value);
    setCountry(selectedId);

    const selectedCountry = countriesAndCapitals.find(
      (country) => country.id === selectedId
    );

    setCity(selectedCountry.capital);
  };

  return (
    <div>
      <select
        name="country"
        id="country"
        onChange={handleCountryChange}
        value={country}
      >
        {countriesAndCapitals.map((item) => (
          <option value={item.id} key={item.id}>
            {item.country}
          </option>
        ))}
      </select>

      <select
        name="capital"
        id="capital"
        value={city}
        // onChange={(e) => setCity(e.target.value)}
      >
        <option value={city}>{city}</option>
      </select>
    </div>
  );
};

export default CountryPicker;