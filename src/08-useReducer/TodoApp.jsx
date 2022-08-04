import { useTodo } from '../hooks';
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'


export const TodoApp = () =>
{
    const { todos, todosCount, pendingTodos, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo();
    return (
        <>
            <h1>TODOs: {todosCount}, Pending: {pendingTodos}  </h1>
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
