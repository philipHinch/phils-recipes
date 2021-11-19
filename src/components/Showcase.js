import React from "react";

const Showcase = ({ inputValue, setInputValue }) => {
    return (

        <div className="showcase-container">
            <h2 className="showcase-title">What are you cooking today?</h2>
            <div className="showcase-input-container">
                <input onChange={(e) => setInputValue(e.target.value) && inputValue === ''} type="text" value={inputValue && inputValue} className="showcase-input" placeholder="Search your meal..." />
            </div>
        </div>

    );
}

export default Showcase;