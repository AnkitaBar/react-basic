import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Count from "./UseState/UseState";
import Max from "./UseState/Max";
import Submit from "./UseState/Submit";
// import ColourPicker from "./UseState/ColourPicker";
import { Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import CountryCapitalDropdown from "./UseState/Capital";
// import CountryPicker from './UseState/Capitalid'
import ToDoList from "./UseState/ToDoList";
import ToDoApp from "./UseState/ToDoApp";
import MovieList from "./UseState/Api";
import Search from "./UseState/Search";
// import Counter from './useReducer/Counter'
// import Colour from "./UseReducer/ColourChange";
import Country from "./useReducer/Capital"
import { Route,BrowserRouter as Router,Routes } from "react-router-dom";
import Params from "./Params/Params";
import Params1 from "./Params/Params1";
import ParamsProducts from "./Params/ParamsProducts";
import ProductDetails from "./Params/ProductDetails";
import ProductListings from "./Params/ProductListings";
import About from "./useContext/About";
import NoteContex from "./useContext/NoteContext";
import Notestate from "./useContext/NoteState";

function App() {
  return (
    <>
      {/* <Count/> */}
      {/* <Max/> */}
      {/* <Submit/> */}
      {/* <ColourPicker/> */}
      {/* <SimpleAccordion/> */}
      {/* <CountryCapitalDropdown />
      <CountryPicker/> */}
      {/* <ToDoList/> */}
      {/* <ToDoApp/> */}
      {/* <MovieList/>
      <Search/> */}
      {/* <Counter/> */}
      {/* <Colour /> */}
      {/*<Country/>*/}

      {/* <Router>
        <Routes>

        <Route path = {"/"} element = {<Params/>}/>
        <Route path = {"/params/:id"} element = {<Params1/>}/>
        </Routes>
      </Router> */}

      {/* <Router>
        <Routes>
          <Route path="/" element={<ParamsProducts />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </Router> */}

      {/* <Router>
        <Routes>
          <Route path="/" element={<ProductListings />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </Router> */}

      {/* ///////////////useContext/////////////////////// */}
<Notestate>
      <Router>
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </Router>
      </Notestate>

    </>
  );
}

export default App;
