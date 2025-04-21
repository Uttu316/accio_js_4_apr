import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import TaskList from "./components/taskList";

const App = () => {
  return (
    <div>
      <Header />
      <h1>Welcome To React</h1>
      <TaskList />
      <Footer />
    </div>
  );
};

export default App;
