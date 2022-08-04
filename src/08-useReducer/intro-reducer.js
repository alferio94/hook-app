

const initialState = [{
    id: 1,
    todo: 'Learn React',
    done: false
}];


const todoReducer = (state = initialState, action = {}) =>
{
    if (action.type === '[TODO] ADD_TODO')
    {
        return [...state, action.payload];
    }

    return state;
}


let todos = todoReducer();
const newTodo = {
    id: 2,
    todo: 'Learn Redux',
    done: false
}

const addTodoAction = {
    type: '[TODO] ADD_TODO',
    payload: newTodo,
}
todos = todoReducer(todos, addTodoAction);
console.log(todos);