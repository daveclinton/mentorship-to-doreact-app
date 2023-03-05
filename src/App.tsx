import * as React from "react";
import ToDoList from "./components/ToDo/index";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <ToDoList />
    </>
  );
};

export default App;
