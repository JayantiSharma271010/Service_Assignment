import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Featured from "./Featured";
import Haircutting from "./Haircutting";
import Styling from "./Styling";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ColorServices from "./ColorServices";
import NaturalHairStyling from "./NaturalHairStyling";
import RelaxerTexturizerKeratin from "./RelaxerTexturizerKeratin";
import ExtensionInstallsAndWigs from "./ExtensionInstallsAndWigs";
import Treatments from "./Treatments";

const Services = () => {
  const serviceRefs = useRef([]);
  const categoryContainerRef = useRef(null);
  const [activeIndex, setactiveIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const categoryRefs = useRef([]);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setactiveIndex(Number(entry.target.dataset.index));
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      serviceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  useEffect(() => {
    const categoryElem = categoryContainerRef.current?.querySelectorAll("li");
    if (categoryElem) {
      categoryRefs.current = Array.from(categoryElem);
    }
  }, []);

  const scrollToService = (index) => {
    setactiveIndex(index);

    const targetElement = serviceRefs.current[index];
    if (targetElement) {
      // Get the target element's position relative to the viewport
      const targetRect = targetElement.getBoundingClientRect();
      const targetPosition = targetRect.top + window.scrollY;

      // Calculate header height and category container height
      const headerHeight = document.querySelector("header").offsetHeight || 0;
      const categoryHeight = categoryContainerRef.current.offsetHeight || 0;

      // Adjust scroll position (additionalOffset can be used for fine-tuning)
      const scrollPosition =
        targetPosition - headerHeight - categoryHeight - 40;

      // Log positions for debugging
      console.log("Target Position:", targetPosition);
      console.log("Scroll Position:", scrollPosition);
      console.log("Header Height:", headerHeight);
      console.log("Category Height:", categoryHeight);

      // Perform smooth scrolling
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    } else {
      console.log(`Error: targetElement is undefined for index: ${index}`);
    }
  };

  function scrollLeft() {
    if (categoryContainerRef.current) {
      categoryContainerRef.current.scrollBy({
        top: 0,
        left: -300,
        behavior: "smooth",
      });
    }
  }

  function scrollRight() {
    if (categoryContainerRef.current) {
      categoryContainerRef.current.scrollBy({
        top: 0,
        left: 300,
        behavior: "smooth",
      });
    }
  }

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      serviceRefs.current.forEach((ref, index) => {
        if (
          ref &&
          ref.offsetTop <= scrollPosition &&
          ref.offsetTop + ref.offsetHeight > scrollPosition
        ) {
          setactiveIndex(index);

          const activeCategory = categoryRefs.current[index];
          const categoryContainer = categoryContainerRef.current;

          if (activeCategory && categoryContainer) {
            const categoryRect = activeCategory.getBoundingClientRect();
            const containerRect = categoryContainer.getBoundingClientRect();

            if (
              categoryRect.left < containerRect.left ||
              categoryRect.right > containerRect.right
            ) {
              categoryContainer.scrollBy({
                top: 0,
                left: categoryRect.left - containerRect.left - 20,
                behavior: "smooth",
              });
            }
          }
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper className="services">
      <header></header>
      <h3 className="service-heading">Select services</h3>

      <div className={`category ${isSticky ? "sticky" : ""}`}>
        <ul ref={categoryContainerRef}>
          <li
            onClick={() => scrollToService(0)}
            className={activeIndex === 0 ? "active" : ""}
          >
            Featured
          </li>
          <li
            onClick={() => scrollToService(1)}
            className={activeIndex === 1 ? "active" : ""}
          >
            Haircutting
          </li>
          <li
            onClick={() => scrollToService(2)}
            className={activeIndex === 2 ? "active" : ""}
          >
            Styling
          </li>
          <li
            onClick={() => scrollToService(3)}
            className={activeIndex === 3 ? "active" : ""}
          >
            Color Services
          </li>
          <li
            onClick={() => scrollToService(4)}
            className={activeIndex === 4 ? "active" : ""}
          >
            Natural Hairstying
          </li>
          <li
            onClick={() => scrollToService(5)}
            className={activeIndex === 5 ? "active" : ""}
          >
            Relaxer/ Texturizer/ Keratin
          </li>
          <li
            onClick={() => scrollToService(6)}
            className={activeIndex === 6 ? "active" : ""}
          >
            Extension, Installs and Wigs
          </li>
          <li
            onClick={() => scrollToService(7)}
            className={activeIndex === 7 ? "active" : ""}
          >
            Treatments
          </li>
        </ul>

        <div className="arrow-btn">
          <span className="left-arrow" onClick={scrollLeft}>
            <MdOutlineKeyboardArrowLeft />
          </span>
          <span className="right-arrow" onClick={scrollRight}>
            <MdOutlineKeyboardArrowRight />
          </span>
        </div>
      </div>
      {[
        <Featured />,
        <Haircutting />,
        <Styling />,
        <ColorServices />,
        <NaturalHairStyling />,
        <RelaxerTexturizerKeratin />,
        <ExtensionInstallsAndWigs />,
        <Treatments />,
      ].map((Component, index) => (
        <div
          key={index}
          ref={(el) => (serviceRefs.current[index] = el)}
          data-index={index}
        >
          {Component}
        </div>
      ))}
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

  header {
    position: sticky;
    top: 0%;
    height: 60px;
    background: #fff;
  }

  .category {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.2 all ease;
    position: sticky;
    height: 60px;
    top: 5%;
    z-index: 1000;
    background: white;
    padding: 10px 0;
    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);

    ul {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      overflow-x: auto;
      white-space: nowrap;
      scroll-behavior: smooth;
      padding: 0;
      list-style: none;
      margin: 0;
      gap: 5px;
      overflow: hidden;
      scrollbar-width: none;
      -ms-overflow-style: none;

      li {
        cursor: pointer;
        padding: 5px;
        font-size: 16px;
        padding: 5px 15px;
        border-radius: 16px;
        font-weight: 600;
        flex-shrink: 0;
        transition: all 0.3s ease;
        &:hover {
          background: #f5f2f2c5;
        }
      }

      li.active {
        background: #000;
        color: white;
      }
    }
  }

  .category.sticky {
    box-shadow: 0 0px 8px rgba(0, 0, 0, 0.2);
    border: 2px solid red;
  }

  .arrow-btn {
    display: flex;
    margin-left: 5px;

    .left-arrow {
      position: relative;
      &::before {
        content: "";
        height: 100%;
        width: 40px;
        position: absolute;
        left: -40px;
        top: 0;
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 0.02) 0%,
          rgba(255, 255, 255, 1) 100%
        );
      }
    }
    span {
      cursor: pointer;
      font-size: 16px;
      padding: 5px 10px;
      border-radius: 16px;
      font-weight: 600;
      flex-shrink: 0;
      &:hover {
        background: #f5f2f2c5;
      }
    }
  }
`;

export default Services;
