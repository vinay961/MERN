// It is same as the reducers that we had studied in react.js, Only the difference is that it is a function that returns a function.
// It is a function that takes an initial state and returns a function that takes an action and returns a new state.
// It is used to create a store that holds the state of the application.

import { createStore, bindActionCreators, combineReducers } from "redux";

const todo_reducer = function(state=[], action) {
    if(action.type == "ADD_TODO"){
        return [...state, { id: state.length + 1, text: action.payload.todoText, completed: false }]
    }
    else if(action.type == "REMOVE_TODO"){
        return state.filter((todo) => todo.id !== action.payload.todoId)
    }
    else if(action.type == "EDIT_TODO"){
        return state.map((todo) => {
            if(todo.id == action.payload.todo.id){
                return { ...todo, text: action.payload.todo.newText }
            }
        })
    }
    else {
        return state;
    }
}

const user_reducer = function(state=[], action) {
    if(action.type == "ADD_USER"){
        return [...state, { id: state.length + 1, name: action.payload.userName }]
    }
    else if(action.type == "REMOVE_USER"){
        return state.filter((user) => user.id !== action.payload.userId)
    }
    else if(action.type == "EDIT_USER"){
        return state.map((user) => {
            if(user.id == action.payload.user.id){
                return { ...user, name: action.payload.user.newName }
            }
        })
    }
    else {
        return state;
    }
}

// Here we can't pass multiple reducers to the createStore function. We can only pass one reducer to the createStore function.
// So we have to combine the reducers into one reducer. We can use the combineReducers function from redux to do this.

const rootReducer = combineReducers({
    todos: todo_reducer,
    users: user_reducer
})
const { dispatch,subscribe,getState,replaceReducer } = createStore(rootReducer);

// dispatch is used to dispatch an action to the store. It takes an action as an argument and returns the new state of the store.
// subscribe is used to subscribe to the store. It takes a callback function as an argument and returns a function that can be used to unsubscribe from the store. 
// getState is used to get the current state of the store. It takes no arguments and returns the current state of the store. 
// replaceReducer is used to replace the reducer of the store. It takes a new reducer as an argument and returns nothing.


// In order to avoid the console.log statements, we can use the subscribe method to log the state of the store whenever it changes.
subscribe(() => {
    console.log(getState())
})

// dispatch({type: "ADD_TODO", payload: { todoText: "Learn Redux" }})

// dispatch({type: "ADD_TODO", payload: { todoText: "Learn React" }})

// dispatch({type: "REMOVE_TODO", payload: { todoId: 1 }})


// Now let's understand the action creaters, which are functions that return an action.
// Why we use action creators? Action creators are used to create actions. They are functions that return an action. They are used to avoid repeating the same action object in multiple places.

const addTodo = (todoText) => {
    return {
        type: "ADD_TODO",
        payload: {
            todoText: todoText
        }
    }
}

const removeTodo = (todoId) => {
    return {
        type: "REMOVE_TODO",
        payload: {
            todoId: todoId
        }
    }
}

const addUser = (userName) => {
    return {
        type: "ADD_USER",
        payload: {
            userName: userName
        }
    }
}

// dispatch(addTodo("Learn Redux"));
// dispatch(addTodo("Learn React"));
// dispatch(removeTodo(1));

// Now let's understand the bindActionCreators, which are functions that return a function that dispatches an action. They are used to avoid repeating the same action object in multiple places.
// They are used to bind the action creators to the dispatch function. This is useful when we want to use the action creators in a component and we don't want to pass the dispatch function to the component.

const actions = bindActionCreators({ addTodo, removeTodo, addUser }, dispatch);
actions.addTodo("Learn Redux");
actions.addTodo("Learn React");
actions.addUser("Vinay Rai");
actions.removeTodo(1);
