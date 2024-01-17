import { createSlice, nanoid } from "@reduxjs/toolkit";
const getItems = () => {
    let list = localStorage.getItem('list');
    if (list) {
        return JSON.parse(localStorage.getItem('list'));
    }
    else {
        return [];
    }
}
const initialState = {
    todos: getItems()
}


export const todoSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers:
    {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            state.todos.push(todo);
            localStorage.setItem('list', JSON.stringify(state.todos));
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            localStorage.setItem('list', JSON.stringify(state.todos))
        },
        editTodo: (state, action) => {
            for (let i = 0; i < state.todos.length; i++) {
                let elem = state.todos[i];
                if (elem.id === action.payload.id) {
                    elem.text = action.payload.text;
                    break;
                }
            }
            localStorage.setItem('list', JSON.stringify(state.todos))
        },
        toggleTodo: (state, action) => {
            for (let i = 0; i < state.todos.length; i++) {
                let elem = state.todos[i];
                if (elem.id === action.payload) {
                    elem.completed = !elem.completed;
                    break;
                }
            }
            localStorage.setItem('list', JSON.stringify(state.todos));
        },
        removeAll: (state, action) => {
            state.todos = [];
            localStorage.removeItem('list');
        }

    }
})
export const { addTodo, removeTodo, editTodo, toggleTodo, removeAll } = todoSlice.actions;
export default todoSlice.reducer;
