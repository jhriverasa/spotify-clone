import styles from "./Slider.module.css";

import ReactSlider from "react-slider";

const Slider = ({}) => {
  return (
    <div className="flex items-center w-full">
      <ReactSlider
        defaultValue={[0]}
        trackClassName="slider-track"
        withTracks
        className="flex items-center w-full h-5"
        thumbClassName="w-3 h-3 rounded-full bg-white"
        
      />
    </div>
  );
};

export default Slider;
