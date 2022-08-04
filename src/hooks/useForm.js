import { useEffect, useState } from "react"

export const useForm = (initialForm = {}) =>
{
    const [formState, setFomrState] = useState(initialForm)
    const onInputChange = ({ target }) =>
    {
        const { name, value } = target;
        setFomrState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () =>
    {
        setFomrState(initialForm);
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
