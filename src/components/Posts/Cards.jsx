/**
 * A presentational component
 */
import Card from "./Card";
import data from "../../assets/data";

const Cards = () => {
  return (
    <div className="cards__container">
      {data.map((item) => (
        <>
          <Card {...item} key={item.id} className={"card"}/>
          <hr />
        </>
      ))}
    </div>
  );
};

export default Cards;



