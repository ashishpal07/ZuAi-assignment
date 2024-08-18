import { PdfViewer } from '../components/PdfViewer'
import { PerformanceSideBar } from '../components/PerformanceSideBar'
import { SideMenu } from '../components/SideMenu'
import { Streak } from '../components/Streak'

export default function evaluate () {
  return (
    <div className='bg-slate-100 flex justify-between min-h-screen'>
      <div className='w-[5%]'>
        <SideMenu />
      </div>
      <div className='flex flex-col-reverse justify-end w-[100%] md:flex md:flex-col md:justify-start md:mt-20 lg:flex-row p-2 space-x-8 sm:w-[70%]'>
        <div className='lg:w-[60%]'>
          <PdfViewer />
        </div>
        <div className='mt-2 lg:w-[40%]'>
          <PerformanceSideBar />
        </div>
      </div>
      <div className='md:w-[5%]'>
        <Streak />
      </div>
    </div>
  )
}
