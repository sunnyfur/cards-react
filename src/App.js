import rates from './mock/rates.json';

function App() {
  return (
    <div className='App'>
      {rates.results.map((rate) => {
        return (
          <Card
            name={rate.name}
            cost={rate.cost}
            currency={rate.currency}
            length={rate.length}
            speed={rate.speed}
            speedUnits={rate.speedUnits}
            optional={rate.optional}
          ></Card>
        );
      })}
    </div>
  );
}

export default App;
