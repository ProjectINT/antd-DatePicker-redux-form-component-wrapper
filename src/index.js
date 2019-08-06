import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import "antd/dist/antd.css";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <Form />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
