import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import TaskList from "./components/taskList";

const App = () => {
  return (
    <div>
      <Header />
      <h1>Welcome To React</h1>
      <TaskList title="My Task List" />
      <Footer name="Accio" />
    </div>
  );
};

export default App;
