import CostItem from "./componens/CostItem";
function App() {
  const costs = [
    {
      date: new Date(2023, 7, 1),
      description: "Something3",
      amount: 1591,
    },
    {
      date: new Date(2023, 6, 27),
      description: "Something2",
      amount: 123,
    },
    {
      date: new Date(2023, 6, 25),
      description: "Something1",
      amount: 111,
    },
  ];

  return (
    <div className="App">
      <h1>Hello!</h1>

      <CostItem
        date={costs[0].date}
        description={costs[0].description}
        amount={costs[0].amount}
      />
      <CostItem
        date={costs[1].date}
        description={costs[1].description}
        amount={costs[1].amount}
      />
      <CostItem
        date={costs[2].date}
        description={costs[2].description}
        amount={costs[2].amount}
      />
    </div>
  );
}

export default App;
