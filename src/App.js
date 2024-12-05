import React, { useEffect, useState } from "react";
import "./App.css";
import firstImage from "./mountain_img.jpg";
import secondImage from "./mountain_second.jpg";
import thirdImage from "./third_image.jpg";

const imageArray = [firstImage, secondImage, thirdImage];

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 3);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  });

  return (
    <div className="App">
      <h1>Carousel</h1>
      <div className="carouselStyle">
        <img src={imageArray[currentImageIndex]} width="1500" height="500" />
      </div>
    </div>
  );
}

export default App;
