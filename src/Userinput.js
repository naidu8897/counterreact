import { useState } from "react";


function UserInput() {

    let [uInput, setInput] = useState("")


    function userData(e) {
setInput(e)
    }
    return (
        <div>
            <input onChange={(e) =>userData(e.target.value)} />
            <h1>{uInput}</h1>
            <Counter uVal = {parseInt(uInput)}/>
        </div>
    )
}
export default UserInput

