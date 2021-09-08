import React from "react";

import { useSelector } from "react-redux";

const Loader = () => {
    const loaderState = useSelector((state)=>state.loading)
    if(loaderState.isLoading) {
    return (
        <div className="loader-container">
            <div className = "spinner">
                <div className="bounce1">Loading Please wait</div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        </div>
    )
    }
    return null;
}

export default Loader;