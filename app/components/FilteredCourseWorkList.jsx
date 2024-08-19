"use client"

import { useState } from 'react';
import { useFilteredCourseWork } from '../../hooks/useFilteredCourseWork';
import { Coursework } from './CourseWork';
import { Button } from './Button';

export const FilteredCourseWorkList = () => {
  const {
    files,
    courseworkTypes,
    activeFilter,
    setActiveFilter,
  } = useFilteredCourseWork();

  const [displayCount, setDisplayCount] = useState(4);

  const showMoreFiles = () => {
    if (displayCount === files.length ) setDisplayCount(4)
    else setDisplayCount(files.length)
  }

  return (
    <div className="px-3 py-4 bg-blue-50 rounded-md mt-7">
      <h2 className="text-xl font-semibold mb-4">Explore coursework</h2>
      <div className="md:flex space-x-4 mb-4">
        {['All', ...courseworkTypes].map((type, index) => (
          <button
            key={index}
            className={`px-2 mt-2 md:px-3 py-1 rounded-full text-sm font-medium ${
              activeFilter === type ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setActiveFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="md:grid grid-cols-2 gap-4">
        {files.slice(0, displayCount).map((file, index) => {
          return (<Coursework key={index} file={file} />)
        })}
      </div>
      {displayCount < files.length && (
        <Button showMoreFiles={showMoreFiles} label={'View all'} />
      )}
      {(displayCount >= files.length && displayCount > 4) && (
        <Button showMoreFiles={showMoreFiles} label={'View less'} />
      )}
    </div>
  );
};

