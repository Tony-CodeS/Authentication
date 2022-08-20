import React, {useState, useEffect}  from 'react'

function Form() {
const[count, setCount] = useState(0)
useEffect( () =>{
  document.title = `you clicked ${count} times`
}

)
  return (
    <div> <button onClick={() => setCount(count +1)}> you clicked {count} times</button>
    </div>
  )
}

export default Form