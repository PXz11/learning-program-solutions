import './App.css';
import officespaces from './officespaces';

function App() {
  const element = "Office Space";
  
  let colors = [];
  officespaces.forEach(officeSpace => {
    if(officeSpace.rent <= 60000) {
      colors.push("textRed");
    } else {
      colors.push("textGreen");
    }
  });

  return (
    <div className="App">
      <h1>{element}s at Affordable Range</h1>

      {officespaces.map((officeSpace, index) => (
        <div key={officeSpace.id} className="office-card">
          <div className="office-image">
            <img src={officeSpace.imageUrl} width="25%" height="25%" alt={`Office Space - ${officeSpace.name}`} />
          </div>
          <h2>Name: {officeSpace.name}</h2>
          <h3 className={colors[index]}>Rent: ₹{officeSpace.rent.toLocaleString()}</h3>
          <h3>Address: {officeSpace.address}</h3>
        </div>
      ))}
    </div>
  );
}
export default App;