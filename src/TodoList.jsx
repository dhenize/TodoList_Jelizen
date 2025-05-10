import React, { useState } from 'react'

import searchlogo from './assets/Pics/search.png'
import list from './assets/Pics/list.png'
import bin from './assets/Pics/delete.png'
import add from './assets/Pics/plus.png'


export default function TodoList() {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='flex flex-row h-[40rem]'>
      
      {/*SIDE NAVIGATION*/}
      <aside className='bg-[#ECEFCE] p-3 rounded-xl'>
        <div className='flex m-2 mb-8 gap-38'>
          <h1 className='text-3xl font-bold'>MENU</h1>
          <button className='font-extrabold'>☰</button>
        </div>

        <div className='flex items-center'>
          <img src = {searchlogo} className='h-7 mx-2'></img>
          <input className='text-xl' placeholder='Search'>
          </input>
        </div>

        
        <div className='py-10'>
          <button className='flex flex-row items-center gap-4'>
            <img src = {list}></img>
            My Todo List
          </button>
        </div>


        <div>
          <button className='flex flex-row items-center gap-4'>
            <img src = {bin} className='mx-1'></img>
            Deleted Items
          </button>
        </div>
        
      </aside>


      {/*MAIN SECTION*/}
      <section className='mx-20 my-5'>

        <div className='flex flex-row gap-5 items-center'>
          <h1 className='text-3xl font-bold'>Task</h1>
          <h2 className='bg-[#ECEFCE] py-1.5 px-6 rounded-md'>2</h2>
        </div>

        <button className='flex flex-row gap-3 my-7 w-[20rem] h-[3rem] items-center rounded-md border-1 text-xl'>
          <img src = {add}></img>
          Add Task
        </button>

        <div className='flex items-center'>
          <input id="default-checkbox" type="checkbox" class="w-5 h-5 rounded-md"></input>
          <label for="default-checkbox" class = "ms-3">Research</label>
        </div>
        


        {/*<button onClick = {handleIncrement}>Increment</button>
        <button onClick = {handleDecrement}>Decrement</button>
        <p>{count}</p>*/}
      </section>
    </div>
  )
}

