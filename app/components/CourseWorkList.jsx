'use client'

import React, { useState } from 'react'
import { useStore } from '@/store/store'
import { Coursework } from './CourseWork'
import { Button } from './Button'

export const CourseworkList = () => {
  const files = useStore(state => state.files)
  const [displayCount, setDisplayCount] = useState(2)

  const showMoreFiles = () => {
    if (displayCount === files.length ) setDisplayCount(2)
    else setDisplayCount(files.length)
  }

  return (
    <div className='px-3 py-4 bg-blue-50 rounded-md mt-7'>
      <h2 className='text-xl font-semibold mb-4'>My coursework</h2>
      <div className='gap-4 md:grid grid-cols-2'>
        {files.slice(0, displayCount).map((file, index) => {
          return <Coursework file={file} key={index} />
        })}
      </div>
      {displayCount < files.length && (
        <Button showMoreFiles={showMoreFiles} label={'View all'} />
      )}
      {displayCount >= files.length && (
        <Button showMoreFiles={showMoreFiles} label={'View less'} />
      )}
    </div>
  )
}
