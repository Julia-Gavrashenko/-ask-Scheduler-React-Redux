// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from './reducer';
import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer, filtersReducer } from './reducer';


export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

// const enhancer = devToolsEnhancer()
// export const store = createStore(rootReducer, enhancer)
