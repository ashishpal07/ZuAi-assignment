import React from 'react'

export const Button = ({ label, showMoreFiles }) => {
  return (
    <div className='flex justify-center mt-4'>
      <button
        className='px-5 py-2 rounded-full bg-slate-150 text-slate-400 font-bol'
        onClick={showMoreFiles}
      >
        {label}
      </button>
    </div>
  )
}
