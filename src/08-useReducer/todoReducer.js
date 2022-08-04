export const todoReducer = (intialState, action) =>
{
    switch (action.type)
    {
        case '[TODO] ADD_TODO':
            return [...intialState, action.payload];
        case '[TODO] REMOVE_TODO':
            return intialState.filter(todo => todo.id !== action.payload);
        default:
            return intialState;
    }
}