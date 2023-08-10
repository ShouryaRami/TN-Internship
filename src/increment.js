import React, {useState} from 'react'

function Inc1(){
    const [count,setCount] = useState(0)
    const incrementCount = () => {
        setCount(count+1);
    }
    const decrementCount = () => {
        setCount(count-1);
    }
    return (
        <>
        <button onClick={incrementCount}>Increment</button>
        {count}
        <button onClick={decrementCount}>Decrement</button>
        </>
    );
}
export default Inc1;