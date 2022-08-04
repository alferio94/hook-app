import { memo } from 'react';
export const Small = memo(({ value }) =>
{
    console.log('Re Render');
    return (
        <small>{value}</small>
    )
})
