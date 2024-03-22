import React from 'react';
import { Fade, Slide, Zoom } from "react-slideshow-image";
import "./Hero.css";
import { useNavigate} from "react-router-dom"; // Import useHistory hook for navigation
import "react-slideshow-image/dist/styles.css";
import image01 from "../../image/banner-bg.jpg";
import image02 from "../../image/a6c936b58d84b01cd5f1791ff9da8be2.jpg";
import image03 from "../../image/images.jpg";

const Hero = () => {
  const sliderImages = [
    {
      url: image01,
      h1: "Welcome to the Sierra Leone Association of Social Workers (SLASW)",
      desc: "The Sierra Leone Association of Social Workers (SLASW) is the independent national professional organization of Social Workers, Social Work Students and Promoters dedicated to promoting the social work profession and the Association in Sierra Leone."
    },
    {
      url: image02,
      h1: "Why be a SLASW Member?",
      desc: "When you join the SLASW you’ll become part of an active and vibrant community of more than 17,000 social work professionals. As the profession’s peak body, the SLASW is committed to maintaining high standards, ethical practice and ongoing professional development."
    },
    {
      url: image03,
      h1: "Welcome to the Sierra Leone Association of Social Workers (SLASW)",
      desc: "The Sierra Leone Association of Social Workers (SLASW) is the independent national professional organization of Social Workers, Social Work Students and Promoters dedicated to promoting the social work profession and the Association in Sierra Leone."
    },
  ];

  const navigate = useNavigate(); // Initialize useHistory hook

  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '400px',
    width: '100%',
    position: 'relative', // Added position relative
  }

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(4px)', // Apply blur effect to overlay
    zIndex: -1, // Send overlay behind text content
  }

  const contentStyles = {
    width: '60%',
    margin: '0 auto',
    zIndex: 1, // Ensure text content is above overlay
    textAlign: 'center',
    color: 'black', // Set text color to white for better contrast
  }

  const spanStyle = {
    // background: "#efefef",
    color: "rgb(4, 4, 158)",
    fontSize: '2.5rem'
  }

  const descStyles = {
    fontSize: '18px'
  }

  const buttonStyle = {
    width: '300px',
    margin: '40px 10px 10px 10px',
    padding: '10px 20px',
    fontSize: '1rem',
    fontWeight: 'bold',
    backgroundColor: '#006fb9',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  }

  const btnSearchStyle = {
    ...buttonStyle,
    backgroundColor: 'transparent',
    border: '2px solid #006fb9',
    color: 'black'
  }

  const heroActionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  const handleJoinClick = () => {
    navigate ('/login'); // Redirect to join page
  }

  const handleSearchClick = () => {
    navigate ('/search'); // Redirect to search page
  }

  return (
    <div className="slide-container">
      <Slide>
        {sliderImages.map((image, index) => (
          <div key={index} style={divStyle}>
            <div style={{ ...overlayStyle, backgroundImage: `url(${image.url})` }}></div> {/* Overlay with blurred background */}
            <div style={contentStyles}>
              <h1 style={{ ...spanStyle }}>
                {image.h1}
              </h1>
              <p style={descStyles}>{image.desc}</p>
              <div style={heroActionStyle}>
              <button style={buttonStyle} onClick={handleJoinClick}>Join</button>
              <button style={btnSearchStyle} onClick={handleSearchClick} className='search'>Search for Social Worker</button>
              </div>
              
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Hero;
