import React, { useState } from "react";
import "./Filter.css";
import classNames from "classnames";


const Filter = ({ searchItems, inputChangeValue, selectTitle, theme }) => {

    const [inputItem, setInputItem] = useState(null)
    const [select, setSelect] = useState(false)

    const closeSelect = (e) => {

        setSelect(!select)

        window.addEventListener("click", (event) => {
            if(event.target !== e.target){
                setSelect(false)
            }
        })
    }

    const setInputValue = (e) => {
        searchItems(e.target.value)
        setInputItem(e.target.value)
    }

    const searchItem = () => {
        searchItems(inputItem)
    }

    const changeSelectTitle = (e) => {
        inputChangeValue(e.target.innerText)
    }

    return (
        <div className={classNames("dp", "filter")}>
            <div className="search">
                <div className={classNames("dp", "form", theme ? "theme-block" : "")}>
                    <div className={classNames("icon-search", "dp")} onClick={searchItem}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="search">
                            <path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z" fill="#848484"/>
                            </g>
                        </svg>
                    </div>
                    <input type="text" placeholder="Search for a country…" onChange={(e) => setInputValue(e)}/>
                </div>
            </div>
            <div className="select">
                <p className={classNames("dp", theme ? "theme-block" : "")} onClick={(e) => closeSelect(e)}> 
                    {selectTitle}
                    <div className="icon-select">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="expand-more">
                            <path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M8.45 0.450001L5 3.9L1.55 0.450001L0.5 1.5L5 6L9.5 1.5L8.45 0.450001Z" fill="black"/>
                            </g>
                        </svg>
                    </div>
                </p>
                <ul className={classNames(select ? "db" : "", theme ? "theme-block" : "")} onClick={(e) => changeSelectTitle(e)}>
                    <li>All</li>
                    <li>Africa</li>
                    <li>Americas</li>
                    <li>Asia</li>
                    <li>Europe</li>
                    <li>Oceania</li>
                    <li>Polar</li>
                </ul>
            </div>
        </div>
    );
};

export default Filter;