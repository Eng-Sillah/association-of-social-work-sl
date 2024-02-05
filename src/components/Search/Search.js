import React from "react";
import "./Search.css";
import image1 from "../../image/hero-02.jpeg"

const Search = () => {

    return (
        <div className="mainContainer">
            <h1>Explore this site</h1>
                <div className="search">
                    <input type="text" /> <label htmlFor="search">Search</label>
                </div>

            <div className="banner">
        <div className="text">
                <div className="title">Join ASW-SL - click here to join</div>
                <div className="field field--name-field-description field--type-string-long field--label-hidden field__item">ASW-SL Membership is available to qualified social workers, or students studying for a recognised social work qualification in Sierra Leone.  <br />  <br /> ASW-SL By your side, every step of the way.  </div>
                <svg width="40" height="33" viewBox="0 0 40 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-4.88833e-07 19.9848L-2.78897e-07 15.182L30.8058 15.182L23.0192 7.39544L26.4153 3.99937L39.9996 17.5837L26.4153 31.168L23.0192 27.7719L30.8063 19.9848L-4.88833e-07 19.9848Z" fill="#FFAA00"></path>
            </svg>
        </div>
        <div className="image">
          <img src={image1} alt="Banner " />
        </div>
      </div>
        </div>
    )
}

export default Search;