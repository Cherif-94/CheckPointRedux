import "./App.css";
import TaskList from "./Components/TaskList/TaskList";
import AddTask from "./Components/AddTask/AddTask";

function App() {
  return (
    <div className="App">
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
