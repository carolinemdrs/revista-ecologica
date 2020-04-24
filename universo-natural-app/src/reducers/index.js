import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import cardList from './cardList';


export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    cardList,
    
  });
