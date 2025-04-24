import "./App.css";
import Counter from "./components/counter";
import Footer from "./components/footer";
import Header from "./components/header";
import TaskList from "./components/taskList";

const App = () => {
  return (
    <div>
      <Header />
      <h1>Welcome To React</h1>
      <Counter />
      <TaskList title="My Task List" />
      <Footer name="Accio" />
    </div>
  );
};

export default App;
