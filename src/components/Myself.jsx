import React from "react";


function MySelf (props) {
return (
    <div>
        <h1>
            My name is {props.name}. I am {props.age} years old. And a {props.sex}
        </h1>
    </div>
)
}

export default MySelf;