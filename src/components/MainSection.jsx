import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import {TextField } from "@mui/material";
import Card from "./Card";
import "bootstrap"

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const MainSection = () => {

    const [dataOfCountry, setDataOfCountry] = useState("")
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
         .then((response) =>{
             return response.json()
          })
          .then((data) => {
            return setDataOfCountry(data)
        //    console.log(data)
          })
         .catch(error => console.error('Error:', error));
    }, [])


  console.log(dataOfCountry)



  return (
    <div className="MainSection darkMode">
      <div className="Header">
        <TextField style={{width:300}} id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField
          id="outlined-select-currency"
          select
          label="Filter by Region"
          style={{width:200}}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div className="container wrapper">
        {dataOfCountry.length ?( dataOfCountry.map((item) => <Card key={item.area} data={item} />)) : (
            <h1>Data is not found</h1>
        )}
      </div>
    </div>
  );
};
export default MainSection;
