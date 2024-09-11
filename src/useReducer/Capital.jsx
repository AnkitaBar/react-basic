import React, { useReducer } from "react";

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

const initialState = {
  countryId: 1,
  capitals: countriesAndCapitals.map((item) => item.capital),
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_COUNTRY": {
      return {
        ...state,
        countryId: action.payload,
      };
    }
    default:
      return state;
  }
};

const Country = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleCountryChange = (e) => {
    const selectedId = Number(e.target.value);
    dispatch({ type: "SET_COUNTRY", payload: selectedId });
  };

  return (
    <div>
      <select
        name="country"
        id="country"
        onChange={handleCountryChange}
        value={state.countryId}
      >
        {countriesAndCapitals.map((item) => (
          <option value={item.id} key={item.id}>
            {item.country}
          </option>
        ))}
      </select>

      <select name="capital" id="capital">
        {state.capitals.map((capital, index) => (
          <option
            value={capital}
            key={index}
            selected={
              capital ===
              countriesAndCapitals.find(
                (country) => country.id === state.countryId
              )?.capital
            }
          >
            {capital}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Country;
