import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from 'react-redux';
import { Reducer } from './reducers/Reducer'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(Reducer, applyMiddleware(thunk))


ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById("root"));
