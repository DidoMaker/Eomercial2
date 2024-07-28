import { Outlet, NavLink } from "react-router-dom";
import './RootLayout.css'

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BiWindowClose } from "react-icons/bi";

import data from "./data.json";

// export default function RootLayout() {



export default function RootLayout() {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = data.filter((value) => {
        return value.title.toLowerCase().includes(searchWord.toLowerCase());
      });
  
      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    };
  
    const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
    };



  return (
    <div className="root-layout">
      <header>
        <nav>
          <NavLink to="/">
            <div className="home-link">
              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.1.1/css/all.css"></link>
              <i class="fa-solid fa-house"></i>
            </div> 
          </NavLink>




  <div className="search">
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="something shit about here"
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="search-icon">
          {filteredData.length === 0 ? (
            <FaSearch />
          ) : (
            <BiWindowClose id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>

          <NavLink to="login">
            <div className="login-style">
              <p>login</p>
            </div>
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}