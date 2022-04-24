import React, {useState} from "react";
import LandingPage from "./sections/LandingPage/LandingPage";
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar'
import ResultsPage from "./sections/Results/ResultsPage";
import axios from 'axios';
import {scroller} from 'react-scroll';

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [results, setResults] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [error, setError] = useState("")

    const toggle = () => {
    setIsOpen(!isOpen)
  }
    const openModal = () => {
      setShowModal(prev =>  !prev);
    };



  const addResult = async (text) => {
    if(text.length !== 0){
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=3d8c05311657375ca6f62d3b9c5a779a&units=metric`)
      .then((response) => {
        scroller.scrollTo("results", {
          smooth: true,
          duration: 500,
          spy: true,
          exact: 'true',
          offset: -90
        });
        console.log(response)
        setResults([response.data, ...results]) 
    })
    .catch((error) => {
      
      openModal();
      setError("There is no such city")
      console.log(error);
  });
}
    else{
      openModal();
      setError("Enter a city name")
    }
    
  };
  return(
    <div>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <LandingPage handleSubmit={addResult} showModal={showModal} setShowModal={setShowModal} error={error}/>
        <ResultsPage results={results} />
    </div>
  );
};
export default HomePage;