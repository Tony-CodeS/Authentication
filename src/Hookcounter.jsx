import React, {useState} from 'react'

function Hookcounter() {

  const[count, setCount] = useState(0)



  return (
    <div>
        <div> count{count}
        </div>
        <button onClick={() => setCount(count +1)}>Increment</button></div>
  )
}

export default Hookcounter