import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallBackHook = () =>
{
    const [counter, setCounter] = useState(10);
    //const incrementFather = () => setCounter(counter + 1);
    const increment = useCallback(
        () =>
        {
            setCounter((value) => value + 1);
        },
        [],
    )

    return (
        <>
            <h1>useCallback Hook: {counter}</h1>

            <ShowIncrement increment={increment} />
        </>
    )
}
