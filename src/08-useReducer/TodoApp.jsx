import { useEffect, useReducer } from 'react'
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'

const initialState = []

const init = () =>
{
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () =>
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
    return (
        <>
            <h1>TODOs: 10, Pending: 2  </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
                </div>
                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />
                    <TodoForm handleNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    )
}
