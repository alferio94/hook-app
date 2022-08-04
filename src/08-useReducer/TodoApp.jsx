import { useTodo } from '../hooks/useTodo';
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'


export const TodoApp = () =>
{
    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo();
    return (
        <>
            <h1>TODOs: 10, Pending: 2  </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
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
