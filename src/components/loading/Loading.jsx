import React from "react";
import loader from "../../loading/loading.svg";
import './Loading.css'
import classNames from "classnames";

export const Loading = () => {
    return (
        <div className={classNames("loading", "container")}>
            <img src={loader} alt="loader" />
        </div>
    )
}
