import HistoryCard from "./components/HistoryCard";
import dummyData from "./data/dummyData";

// import Slider from "react-touch-drag-slider";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./History.css";

const History = () => {
  const dummy = dummyData.historyCard;
  console.log(dummy[0].id);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 374 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 374, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="history-container">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        // ssr={true} // means to render carousel on server-side.
        // infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={1000}
        // keyBoardControl={true}
        // customTransition="all .5"
        transitionDuration={500}
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
      </Carousel>
    </div>
  );
};

export default History;
