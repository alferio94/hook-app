import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () =>
{
    const [formState, setFomrState] = useState({
        username: "Alfonso",
        email: "alfonso@test.com",
    })
    const { username, email } = formState;
    const onInputChange = ({ target }) =>
    {
        const { name, value } = target;
        setFomrState({
            ...formState,
            [name]: value
        })
    }

    //useEffect(() => console.log('formState change'), [formState]);

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input
                type="text"
                placeholder="Username"
                className="form-control"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                placeholder="Email"
                className="form-control mt-2"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            {
                (username === "Alfonso2") && <Message />
            }
        </>
    )
}
