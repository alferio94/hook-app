import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () =>
{
    const {
        formState,
        username,
        email,
        password,
        onInputChange,
        onResetForm } = useForm({
            username: "",
            email: "",
            password: "",
        })

    return (
        <>
            <h1>Formulario con cutomHook</h1>
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
            <input
                type="password"
                placeholder="Password"
                className="form-control mt-2"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button className="btn btn-primary mt-2" onClick={onResetForm}>Borrar</button>
        </>
    )
}
