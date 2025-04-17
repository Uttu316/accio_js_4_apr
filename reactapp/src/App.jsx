import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";

const App = () => {
  const fname = "Utkarsh";
  const lname = "Gupta";

  const getMyAge = () => {
    return parseInt(Math.random() * 100);
  };
  return (
    <div>
      <Header />
      <h1>Welcome To React</h1>

      <h2>I am {fname + " " + lname}</h2>
      <h3>at {getMyAge()}</h3>
      <p>I am a software Engineer</p>
      <div className="skillContainer">
        <h2>Skills</h2>
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default App;
