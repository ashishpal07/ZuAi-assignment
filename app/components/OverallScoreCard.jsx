import { CircularProgressBar } from './CircularProgressBar'
import { getDateFormat } from '@/utility/getDate'

export const OverallScoreCard = () => {
  const currentDate = getDateFormat();
  
  return (
    <div className='flex items-center justify-between bg-white rounded-lg p-3 shadow-md'>
      <div>
        <p className='text-gray-500 text-sm'>Overall Score</p>
        <h2 className='text-md sm:text-2xl lg:text-2xl font-semibold'>
          Remark: <span className='text-green-600'>Good</span>
        </h2>
        <p className='text-gray-400 text-xs'>Evaluates on {currentDate}</p>
      </div>
      <CircularProgressBar
        size = {100} strokeWidth = {10} progress = {65} total={20} score={13} color={'rgb(34 197 94)'}
      />
    </div>
  )
}
