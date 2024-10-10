import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/counterSlice'

const Counter = () => {
  const [amount,setAmount]=useState(0)
  const {count}= useSelector(state=>state.counterReducer)
  const dispatch=useDispatch()

  
  const handleInceremntAmount=()=>{
    if(amount){
      dispatch(incrementByAmount(amount))
    }else{
      alert("Please Enter a valid amount")
    }
  }
  return (
    <div className='border rounded p-5 text-center'>
        <h1 style={{fontSize:"100px"}}>{count}</h1>
        <div style={{width:"500px"}} className="d-flex justify-content-between my-5">
            <div onClick={()=>dispatch(decrement())} className="btn btn-warning text-light">Decrement</div>
            <div onClick={()=>dispatch(reset())}  className="btn btn-danger text-light">Reset</div>
            <div onClick={()=>dispatch(increment())} className="btn btn-success text-light">Increment</div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
            <input onChange={e=>setAmount(e.target.value)} placeholder='Input amount to be incremented' className='form-control' type="text" />
            <button onClick={handleInceremntAmount} className="btn btn-primary ms-3">Increment By Amount</button>
        </div>
    </div>
  )
}

export default Counter