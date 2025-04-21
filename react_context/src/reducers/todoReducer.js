function todoReducer(state, actions){
    if(actions.type === 'ADD_TODO'){
        const todoText = actions.payload.todoText
        return [...state, { id: state.length + 1, text: todoText, completed: false }]
    }
    else if(actions.type === 'REMOVE_TODO'){
        return state.filter((todo) => todo.id !== actions.payload.id)
    }
    else if(actions.type === 'TOGGLE_TODO'){
        return state.map((todo) => {
            if(todo.id === actions.payload.id){
                return {...todo, completed: !todo.completed}
            }
            return todo
        })
    }
    else if(actions.type === 'EDIT_TODO'){
        return state.map((todo) => {
            if(todo.id === actions.payload.id){
                return {...todo, title: actions.payload.title}
            }
            return todo
        })
    }
    else{
        throw new Error('Unknown action type')
    }
} 

export default todoReducer