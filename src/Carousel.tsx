import React, {useState, useEffect} from "react";
import './Carousel.css';

export default function Carousel() {
    const images = [
        './images/yagenda.PNG',
        './images/byone.PNG',
        './images/finans.PNG',
        './images/mistick.PNG'
        
    ];

    const [currentImage, setCurrentImage] = useState(0);

    function goToNextImage(): void {
        if(currentImage === 3) {
            setCurrentImage(0)
        }else {
            let newImageNumber = currentImage + 1;
            setCurrentImage(newImageNumber);
        }
    }
    return (
        <div className="carousel-div">
            <p className="carousel-p">{currentImage + 1}/{images.length}</p>
            <img src={images[currentImage]} alt="Carousel Image" className="carousel-image" />
            <a onClick={goToNextImage} className="btn btn-outline-light my-btn" href="#" id="carousel-button"> Próximo </a>
        </div>
    )
}