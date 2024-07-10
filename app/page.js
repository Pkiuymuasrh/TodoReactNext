"use client"
import React, { useState } from 'react';

const Page = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prevent form submission if title or desc is empty
    if (!title || !desc) return;

    // Add new task to the tasks array
    setTasks([...tasks, { title, desc }]);
    // Clear input fields
    setTitle('');
    setDesc('');
  };

  const deletehandle = (index) => {
    let copyTasks = [...tasks];
    copyTasks.splice(index, 1);
    setTasks(copyTasks);
  };

  return (
    <>
      <h1 className='bg-black h-20 text-white text-center p-8 font-bold text-2xl'>My Todo List</h1>
      <div>
        <form onSubmit={handleSubmit} className='flex flex-row h-screen items-center justify-center p-4 border bg-cover bg-center border-gray-300 rounded-lg' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/public\pexels-cmonphotography-1809644.jpg)` }}>
          <input
            type="text"
            className="text-2xl font-semibold p-4 border-zinc-700 border-2 m-4"
            placeholder='Enter Your Task'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="text-2xl font-semibold p-4 border-zinc-700 border-2 m-4"
            placeholder='Enter Description'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button type='submit' className='bg-zinc-800 text-white font-semibold p-4 text-2xl m-4 rounded-lg'>
            Add Task
          </button>
        </form>
      </div>
      <hr />
      <div className='bg-slate-200 p-5'>
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((task, index) => (
              <li key={index} className='flex justify-between mb-4'>
                <div className='flex items-center justify-between mb-5 w-2/3'>
                  <h5 className='text-3xl font-bold'>{task.title}</h5>
                  <h6>{task.desc}</h6>
                </div>
                <button className='border-2 text-white bg-zinc-800 py-2 px-4 rounded-xl'
                  onClick={() => deletehandle(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <h2>No Tasks Available</h2>
        )}
      </div>
    </>
  );
}

export default Page;

