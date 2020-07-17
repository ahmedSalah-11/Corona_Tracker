import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";


const CounrtyPicker = ({ countryChange }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setCountries(await fetchCountries());
        }
        fetchApi();
    }, [setCountries])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect className="select" defaultValue="" onChange={(e) => { countryChange(e.target.value) }}>
                <option value="">Global</option>
                {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>

        </FormControl>
    );
}
export default CounrtyPicker;