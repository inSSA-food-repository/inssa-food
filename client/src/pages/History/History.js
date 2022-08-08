import HistoryCard from "./components/HistoryCard";
import dummyData from "./data/dummyData";

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

export default History;
