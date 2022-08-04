import { useForm } from "../hooks/useForm"


export const TodoForm = ({ handleNewTodo }) =>
{
    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    })
    const onFormSubmit = (e) =>
    {
        e.preventDefault()
        if (description.trim().length <= 1) return;
        const newTodo = {
            id: new Date().getTime(),
            description,
            completed: false,
        }
        handleNewTodo(newTodo);
        onResetForm();
    }
    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder='what todo?'
                name="description"
                className="form-control"
                value={description}
                onChange={onInputChange}
            />
            <button
                type='submit'
                className="btn btn-primary mt-2"
            >Add</button>
        </form>
    )
}
