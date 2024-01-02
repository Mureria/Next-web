"use client"

import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

import { data } from '../utils/data';

const Faq = () => {
  const [openStates, setOpenStates] = useState(Array(data.length).fill(false));

  const handleToggleQuestion = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  return (
    <div className='flex flex-col gap-4 mx-8 md:mx-32 py-14 my-6'>
      <div>
        <h1 className='text-4xl text-center'>Frequently Ask <span className='text-orange-500'>Question</span></h1>
      </div>

      {/* info */}
      <div className='w-full max-w-[800px] mx-auto my-12'>

        {data.map((item, index) => (
          <div key={index} className='list-none'>
            <div onClick={() => handleToggleQuestion(index)} className='flex justify-between items-center bg-slate-800 text-lg px-6 py-4 mb-2'>
              <h1>{item.title}</h1>
              {openStates[index] ? <FaMinus /> : <FaPlus />}
            </div>
            {openStates[index] && (
              <div className='flex justify-between items-center bg-slate-800 text-[15px] px-6 py-4 mb-2  font-sans tracking-wider'>
                <p>{item.answer}</p> 
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
