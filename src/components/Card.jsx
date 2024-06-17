/* eslint-disable react/prop-types */
import React from "react";

const Card = ({data}) => {
    return (
        <div className="cardFlg">
            <img className="flagImg" src={data.flags.png} alt="" />
            <div className="flagDefinition">
            <h5 className="countryName">{data.name.common}</h5>
            <div className="flugText">
            <p><span className="textStyle">Population:</span> {data.population}</p>
            <p><span className="textStyle">Region:</span> {data.region}</p>
            <p><span className="textStyle">Capital:</span> {data.capital}</p>
            </div>
            </div>

        </div>
    )
}

export default Card;