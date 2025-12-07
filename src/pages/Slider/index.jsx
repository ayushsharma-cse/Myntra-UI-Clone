import { MyntraData } from "../../data/index";
import "./slider.css";

const Slider = () => {
  return (
    <div className="slider_container">
      <div className="slider_images">
        {MyntraData.Slider.map((item, index) => {
          return <img src={item.uri} alt={item.id} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Slider;
