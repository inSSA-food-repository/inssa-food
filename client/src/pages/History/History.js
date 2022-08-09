import HistoryCard from "./components/HistoryCard";
import dummyData from "./data/dummyData";

import Slider from "react-touch-drag-slider";

import "./History.css";

const History = () => {
  const dummy = dummyData.historyCard;
  console.log(dummy[0].id);

  return (
    <div className="history-container">
      <div className="card-wrapper">
        {dummy.map((item, index) => {
          return (
            <HistoryCard
              key={index}
              id={item?.id}
              name={item?.name}
              food_img={item?.food_img}
              desc={item?.description}
            />
          );
        })}
      </div>
    </div>
  );
};

const History2 = () => {
  const dummy = dummyData.historyCard;
  console.log(dummy[0].id);

  return (
    <div className="history-container">
      <Slider
        className="card-slider"
        onSlideComplete={(i) => {
          console.log("finished dragging, current slide is", i);
        }}
        onSlideStart={(i) => {
          console.log("started dragging on slide", i);
        }}
        activeIndex={0}
        transition={0.5}
        scaleOnDrag={true}
        
      >
        {dummy.map((item, index) => {
          return (
            <HistoryCard
              key={index}
              id={item?.id}
              name={item?.name}
              food_img={item?.food_img}
              desc={item?.description}
            />
          );
        })}
      </Slider>
    </div>
  );
};

// export default History;

export default History2;
