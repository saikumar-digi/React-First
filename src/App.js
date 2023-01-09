import './App.css';

import {useState} from 'react';

function Counter() {

  const [count,setCount] = useState(0);

  const increase=()=>{

    setCount(count+1)

  }

  const decrease=()=>{

    setCount(count-1)

  }


  const Reset=()=>{

    setCount(0);

  }

  let a="Counter"

  return (

    <div className="App">

      <div>{a}</div>
      <div>
      <sanp>{count}</sanp>

      </div>

   

    <button onClick={increase}>+</button>

    <sanp className='result'></sanp>

    <button onClick={decrease}>-</button>


    <div className='Reset'>

    <button onClick={Reset}>

      <sanp>Reset</sanp>

      </button>

    </div>

    </div>

  );

}

 

export default Counter;