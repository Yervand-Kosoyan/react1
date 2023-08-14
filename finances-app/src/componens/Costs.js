import "./Costs.css";
import CostItem from "./CostItem";
import Card from "./Card";

function Costs(props) {
  const { data } = props;

  return (
    <Card className="costs">
      <CostItem
        date={data[0].date}
        description={data[0].description}
        amount={data[0].amount}
      />
      <CostItem
        date={data[1].date}
        description={data[1].description}
        amount={data[1].amount}
      />
      <CostItem
        date={data[2].date}
        description={data[2].description}
        amount={data[2].amount}
      />
    </Card>
  );
}

export default Costs;
