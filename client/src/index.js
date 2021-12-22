import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import StockStore from "./store/StockStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        stock: new StockStore()
    }}>
    <App />
    </Context.Provider>,
  document.getElementById('root')
);

