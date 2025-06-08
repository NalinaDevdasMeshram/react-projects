import React, { useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "./App.css";
const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [image, setImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImage = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      console.log(data);
      if (data) {
        setImage(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.errormsg);
      setLoading(false);
    }
  };

  const handleprevious = () => {
    setCurrentSlide(currentSlide === 0 ? image.length - 1 : currentSlide - 1);
  };

  const handlenext = () => {
    setCurrentSlide(currentSlide === image.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    if (url !== "") {
      fetchImage(url);
    }
  }, [url]);
  console.log(image);
  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured ! {errorMsg}</div>;
  }

  return (
    <div className="container">
      <SlArrowLeft onClick={handleprevious} className="arrow arrow-left" />
      {image && image.length
        ? image.map((imgItem, index) => {
            return (
              <img
                key={imgItem.id}
                src={imgItem.download_url}
                alt={imgItem.download_url}
                className={
                  currentSlide === index
                    ? "current-image"
                    : "current-image hide-current-image"
                }
              />
            );
          })
        : null}
      <SlArrowRight onClick={handlenext} className="arrow arrow-right" />
      <span className="circle-indicator">
        {image && image.length
          ? image.map((_, index) => {
              return (
                <button
                  key={index}
                  className={
                    currentSlide === index
                      ? "current-indicator"
                      : "current-indicator inactive-indicator"
                  }
                  onClick={() => setCurrentSlide(index)}
                ></button>
              );
            })
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
