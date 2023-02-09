import React from "react";
import "./MainContent.css";
import classNames from "classnames";
import NotFound from "../not-found/NotFound";

export const MainContent = ( {data, theme} ) => {

    let arr = data?.map(elem => {
        let { name, population, flags, capital, region } = elem;

        return (
            <div className={classNames("card", theme ? "theme-block" : "")}>
                <div className="card-img">
                    <img src={flags.png} alt={name} />
                </div>
                <div className={classNames("card-content", theme ? "theme-block" : "")}>
                    <div className="title">
                        <h2>{name}</h2>
                    </div>
                    <div className="content-list">
                        <p>Population: <span>{population}</span></p>
                        <p>Region: <span>{region}</span></p>
                        <p>Capital: <span>{capital}</span></p>
                    </div>
                </div>
            </div>
        )
    });

    return (    
        <div className={classNames("cards", "dp")}>
            {arr.length === 0 ? <NotFound/> : arr}
        </div>
    );
};
