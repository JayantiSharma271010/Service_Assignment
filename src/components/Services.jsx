import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Featured from "./Featured";
import Haircutting from "./Haircutting";
import Styling from "./Styling";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ColorServices from "./ColorServices";
import NaturalHairStyling from './NaturalHairStyling';
import RelaxerTexturizerKeratin from './RelaxerTexturizerKeratin';
import ExtensionInstallsAndWigs from './ExtensionInstallsAndWigs';
import Treatments from './Treatments';



const Services = () => {
  const serviceRefs = useRef([]);
  const categoryContainerRef = useRef(null)
  const [activeIndex, setactiveIndex] = useState(0)
  const [isSticky, setIsSticky] = useState(false)

  const  scrollToService = (index) =>{
    setactiveIndex(index)
    const offsetTop = serviceRefs.current[index].offsetTop
    const fixedOffset = 130
    window.scrollTo({
      top: offsetTop - fixedOffset,
      behavior: 'smooth',
    })
    
  }


 
  
  console.log(categoryContainerRef.current)
  function scrollLeft(){
    if(categoryContainerRef.current){

      categoryContainerRef.current.scrollBy(
        {
          top:0,
          left: -300,
          behavior:'smooth'
        }
      )
    }
  }


  function scrollRight(){
    if(categoryContainerRef.current){

      categoryContainerRef.current.scrollBy(
        {
          top:0,
          left: 300,
          behavior:'smooth'
        }
      )
    }
  }


 
  return (
    
      <Wrapper className="services">
        <header>
        </header>
        <h3 className="service-heading">Select services</h3>

        <div className={`category ${isSticky ? 'sticky' : ''}` } >
          <ul ref={categoryContainerRef}>
            <li onClick={()=> scrollToService(0)} className={activeIndex === 0 ? 'active' : ''}>Featured</li>
            <li onClick={()=> scrollToService(1)} className={activeIndex === 1 ? 'active' : ''}>Haircutting</li>
            <li onClick={()=> scrollToService(2)} className={activeIndex === 2 ? 'active' : ''}>Styling</li>
            <li onClick={()=> scrollToService(3)} className={activeIndex === 3 ? 'active' : ''}>Color Services</li>
            <li onClick={()=> scrollToService(4)} className={activeIndex === 4 ? 'active' : ''}>Natural Hairstying</li>
            <li onClick={()=> scrollToService(5)} className={activeIndex === 5 ? 'active' : ''}>Relaxer/ Texturizer/ Keratin</li>
            <li onClick={()=> scrollToService(6)} className={activeIndex === 6 ? 'active' : ''}>Extension, Installs and Wigs</li>
            <li onClick={()=> scrollToService(7)} className={activeIndex === 7 ? 'active' : ''}>Treatments</li>

          </ul>
            <div className="arrow-btn">
            <span className="left-arrow" onClick={scrollLeft}>
                <MdOutlineKeyboardArrowLeft/>
            </span>
            <span className="right-arrow" onClick={scrollRight}>
                <MdOutlineKeyboardArrowRight/>
            </span>
            </div>
        </div>

      <div ref={(el)=> (serviceRefs.current[0] = el)}>
        <Featured />
      </div>
      <div ref={(el)=> (serviceRefs.current[1] = el)}>
        <Haircutting/>
      </div>
      <div ref={(el)=> (serviceRefs.current[2] = el)}>
        <Styling/>
      </div>
      <div ref={(el)=> (serviceRefs.current[3] = el)}>
        <ColorServices/>
      </div>
      <div ref={(el)=> (serviceRefs.current[4] = el)}>
        <NaturalHairStyling/>
      </div>
      <div ref={(el)=> (serviceRefs.current[5] = el)}>
        <RelaxerTexturizerKeratin/>
      </div>
      <div ref={(el)=> (serviceRefs.current[6] = el)}>
        <ExtensionInstallsAndWigs/>
      </div>
      <div ref={(el)=> (serviceRefs.current[7] = el)}>
        <Treatments/>
      </div>
      </Wrapper>
  
  );
};

const Wrapper = styled.div`

max-width: 54%;
margin: 20px 0;

  .service-heading {
    font-size: 3em;
    font-weight: bolder;
    margin: 20px 0 8px;
    z-index: 1001;
    position: relative;
    background: white;
  }

  header{
    position: sticky;
    top: 0%;
    height: 60px;
    background: #fff;

  }

  .category{
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.3s all ease;
    position: sticky;
    height: 60px;
    top: 5%;
    z-index: 1000;
    background: white;
    padding: 10px 0;
    ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow-x: auto;
        white-space: nowrap;
        scroll-behavior: smooth;
        padding: 0;
        list-style: none;
        margin: 0;
        gap: 5px;

        scrollbar-width: none;
        -ms-overflow-style: none;
        
          
        li{
            cursor: pointer;
            padding: 5px;
            font-size: 16px;
            padding: 5px 15px;
            border-radius: 16px;
            font-weight: 600;
            flex-shrink: 0;
            transition: all .3s ease;
            &:hover{
                background: #f5f2f2c5;
            }
            
        }
        
        li.active{
            background: #000;
            color: white;
        }

        
    }
  }

  .category.sticky{
    box-shadow: 0 0px 8px rgba(0,0,0,.2);
    border: 2px solid red;
  }

  .arrow-btn{
      display: flex;
      margin-left: 5px;
      span{
          cursor: pointer;
          font-size: 16px;
          padding: 5px 10px;
          border-radius: 16px;
          font-weight: 600;
          flex-shrink: 0;
          &:hover{
                background: #f5f2f2c5;
            }
    }
  }

`;

export default Services;
