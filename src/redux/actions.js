import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';


export const addTask = createAction('task/addTask', text => {
  return {
     payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  }
})
console.log(addTask('add'))

export const deleteTask = createAction('task/deleteTask')
console.log(deleteTask('delete'))

export const toggleCompleted = createAction('task/toggleCompleted')
console.log(toggleCompleted('toggle'))

export const setStatusFilter = createAction('filters/setStatusFilter')
console.log(setStatusFilter('status'))


// export const addTask = text => {
//   return {
//     type: 'task/addTask',
//     payload: {
//       id: nanoid(),
//       completed: false,
//       text,
//     },
//   };
// };

// export const deleteTask = taskId => {
//   return {
//     type: 'task/deleteTask',
//     payload: taskId,
//   };
// };

// export const toggleCompleted = taskId => {
//   return {
//     type: 'task/toggleCompleted',
//     payload: taskId,
//   };
// };

// export const setStatusFilter = value => {
//   return {
//     type: 'task/setStatusFilter',
//     payload: value,
//   };
// };
