import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Inc, Dec} from "./action/Action"

const App = () => {
  const stte = useSelector((state)=>state.changeNum);
  const dispach = useDispatch();

  return (
    <div className='flex justify-center mt-10'>
      
     <button onClick={()=> dispach(Inc)} className='font-bold p-4 border-yellow-300 border-2 bg-yellow-200'>Increment</button>
       <button className='w-20 font-bold'>{stte}</button>
     <button onClick={()=> dispach(Dec)} className='font-bold p-4 border-yellow-300 border-2 bg-yellow-200'>Decrement</button>

    </div>
  )
}

export default App  