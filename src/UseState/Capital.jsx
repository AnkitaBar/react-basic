import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const countryCapitalData = {
    USA: "Washington, D.C.",
    Canada: "Ottawa",
    Australia: "Canberra",
    India: "New Delhi",
    Japan: "Tokyo",
};

const CountryCapitalDropdown = () => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCapital, setSelectedCapital] = useState('');

    const handleCountryChange = (event) => {
        const country = event.target.value;
        setSelectedCountry(country);
        setSelectedCapital(countryCapitalData[country]);
    };

    const handleCapitalChange = (event) => {
        setSelectedCapital(event.target.value);
    };

    return (
        <div>
            <FormControl fullWidth margin="normal">
                <InputLabel id="country-select-label">Country</InputLabel>
                <Select
                    labelId="country-select-label"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                >
                    {Object.keys(countryCapitalData).map((country) => (
                        <MenuItem key={country} value={country}>
                            {country}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
                <InputLabel id="capital-select-label">Capital</InputLabel>
                <Select
                    labelId="capital-select-label"
                    value={selectedCapital}
                    onChange={handleCapitalChange}
                >
                    {Object.values(countryCapitalData).map((capital) => (
                        <MenuItem key={capital} value={capital}>
                            {capital}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default CountryCapitalDropdown;
