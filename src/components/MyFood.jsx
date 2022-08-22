import React from 'react'

function MyFood({ name, origin, nickname}) {
return (
    <div>
        <h1>
            The name of my food {name}.
            It originates from {origin}. 
            It is popularly known as {nickname}
            </h1>
    </div>
)
}

export default MyFood;


