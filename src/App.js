import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [{ id: 1, title: "wake up" }, { id: 2, title: "wash face" }],
      id: uuid(),
      item: "",
      editItem: false
    };
  }

  handleChange = e => {
    console.log("handleChange log");
  };

  handleSubmit = e => {
    console.log("handleSubmit log");
  };

  clearList = () => {
    console.log("clearList");
  };

  handleDelete = id => {
    console.log(`handleDelete ${id}`);
  };

  handleEdit = id => {
    console.log(`handleEdit ${id}`);
  };

  render() {
    const { items, item, editItem } = this.state;
    const {
      handleChange,
      handleSubmit,
      clearList,
      handleDelete,
      handleEdit
    } = this;

    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize tex-center">Todo Input</h3>
            <TodoInput
              item={item}
              editItem={editItem}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
            <TodoList
              items={items}
              clearList={clearList}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
