import Costs from "./componens/Costs";

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

      <Costs data={costs} />
    </div>
  );
}

export default App;
