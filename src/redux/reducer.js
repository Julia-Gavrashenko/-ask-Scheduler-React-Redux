// import { combineReducers } from 'redux';
import { statusFilters } from './constants';
import { createReducer } from '@reduxjs/toolkit';
import {
  addTask,
  deleteTask,
  toggleCompleted,
  setStatusFilter,
} from './actions';

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

// add 'builder callback' notation and immer
export const tasksReducer = createReducer(tasksInitialState, builder => {
  builder
    .addCase(addTask, (state, action) => {
      // return [...state, action.payload];
      state.push(action.payload);
    })
    .addCase(deleteTask, (state, action) => {
      // return state.filter(task => task.id !== action.payload);
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    })
    .addCase(toggleCompleted, (state, action) => {
      // return state.map(task => {
      //   if (task.id !== action.payload) {
      //     return task;
      //   }
      //   return { ...task, completed: !task.completed };
      // });

      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
        }
      }
    });
});

const filtersInitialState = {
  status: statusFilters.all,
};

export const filtersReducer = createReducer(filtersInitialState, builder => {
  builder.addCase(setStatusFilter, (state, action) => {
    // return {
    //   ...state,
    //   status: action.payload,
    // };
    state.status = action.payload;
  });
});




// export const tasksReducer = createReducer(tasksInitialState, {
//   [addTask]: (state, action) => {
//       return [...state, action.payload];
//   },
//   [deleteTask]: (state, action) => {
//      return state.filter(task => task.id !== action.payload);
//   },
//   [toggleCompleted]: (state, action) => {
//      return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return { ...task, completed: !task.completed };
//       });
//   },
// });

// export const filtersReducer = createReducer(filtersInitialState, {
//   [setStatusFilter]: (state, action) => {
//     return {
//       ...state,
//       status: action.payload,
//     };
//   },
// });

// export const tasksReducer = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     case addTask.type:
//       return [...state, action.payload];
//     case deleteTask.type:
//       return state.filter(task => task.id !== action.payload);
//     case toggleCompleted.type:
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return { ...task, completed: !task.completed };
//       });
//     default:
//       return state;
//   }
// };

// export const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });

// export const rootReducer = (state = {}, action) => {
//   return {};
// };

// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'task/addTask': {
//       return {
//         ...state,
//         tasks: [...state.tasks, action.payload],
//       };
//     }
//     case 'task/deleteTask': {
//       return {
//         ...state,
//         tasks: state.tasks.filter(task => task.id !== action.payload),
//       };
//     }
//     case 'task/toggleCompleted': {
//       return {
//         ...state,
//         tasks: state.tasks.map(task => {
//           if (task.id !== action.payload) {
//             return task;
//           }
//           return {
//             ...task,
//             completed: !task.completed,
//           };
//         }),
//       };
//     }
//     case 'filters/setStatusFilter': {
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           status: action.payload,
//         },
//       };
//     }

//     default:
//       return state;
//   }
// };
