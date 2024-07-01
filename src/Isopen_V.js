import React from "react";
import { useState, useEffect } from 'react';
import Portfolio_details from "./portifolio";

const Portfolio = ({index}) => {
    const [IsOpen, SetOpen] = useState(true)
    
    const toggleOpen = () => {
        SetOpen(!IsOpen);
      };
    return(
        <>
        <Portfolio_details index={index} isclicked={IsOpen}/>
        </>
    )
    
}

export default Portfolio;