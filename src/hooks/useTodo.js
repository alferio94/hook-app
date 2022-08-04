import { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'


const init = () =>
{
    return JSON.parse(localStorage.getItem('todos')) || []
}
export const useTodo = (initialState = []) =>
{
    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init)
    useEffect(() =>
    {
        localStorage.setItem('todos', JSON.stringify(todos) || []);
    }, [todos])
    const handleNewTodo = (todo) =>
    {
        dispatchTodo({
            type: '[TODO] ADD_TODO',
            payload: todo
        });
    }
    const handleDeleteTodo = (id) =>
    {
        dispatchTodo({
            type: '[TODO] REMOVE_TODO',
            payload: id
        });
    }
    const handleToggleTodo = (id) =>
    {
        dispatchTodo({
            type: '[TODO] TOGGLE_TODO',
            payload: id
        });
    }
    return {
        todos,
        todosCount: todos.length,
        pendingTodos: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}
