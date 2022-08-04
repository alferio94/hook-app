import React from "react";

export const ShowIncrement = React.memo(({ increment }) =>
{
    console.log('ShowIncrement');
    return (
        <button
            className="btn btn-primary"
            onClick={() => increment()}
        >
            increment
        </button>
    )
})
