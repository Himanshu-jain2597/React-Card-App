import React from "react";

import { useSelector } from "react-redux";

const Loader = () => {
    const loaderState = useSelector((state)=>state.loading)
    if(loaderState.isLoading) {
    return (
        <div className="loader-container">
            <div className = "spinner">
                <div className="bounce1">Fetching Data From API. Please wait</div>
            </div>
        </div>
    )
    }
    return null;
}

export default Loader;