import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () =>
{
    const { increment, counter } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                isLoading ? <LoadingQuote /> : <Quote data={data} />
            }

            <button className="btn btn-primary" onClick={() => increment()} disabled={isLoading}>
                Next Quote
            </button>

        </>
    )
}
