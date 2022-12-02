import React from 'react'

const AboutAndNotice_crash = () => {
  return (
    <div className=' flex flex-col md:flex-row w-full p-5 md:p-10 dark:shadow-xl'>
      
      
      <div className=' text-black dark:text-white w-full md:h-[300px] my-5 lg:mr-5 p-5 grid justify-center 
                  bg-gradient-to-r hover:bg-gradient-to-t from-slate-100 dark:from-slate-800
                                     via-purple-200 dark:via-black dark:hover:via-gray-700
                                     to-red-100 dark:to-gray-700
                  shadow-sm-light hover:shadow-2xl lg:border-r-8
                   border-fuchsia-500 dark:border-sky-500
                  rounded-3xl hover:rounded-2xl shadow-sky-500 hover:shadow-fuchsia-300 
                  dark:hover:shadow-sky-500 font-medium font-sans duration-300 hover:scale-[101%]
                  hover:ring-2 ring-offset-slate-700 dark:ring-teal-400 grow '>
        
        <h1 className='text-xl text-center h-9 rounded-lg font-black dark:border-2'>
           ----------About of crash--------- 
        </h1>
        <p className='overflow-auto p-2'>Deserunt adipisicing adipisicing anim excepteur do consequat dolor officia deserunt magna et esse id. Laborum pariatur do qui nulla consequat pariatur deserunt. Aute Lorem dolore ex et nulla commodo consectetur labore tempor. Cillum sint consequat occaecat irure Lorem qui enim culpa commodo irure ipsum enim. Pariatur mollit Lorem fugiat deserunt labore do duis reprehenderit ex.</p>
      </div>
      
      
          
      <div className=' dark:text-white w-full md:h-[300px] my-5 lg:ml-5 p-5 grid justify-center 
                  bg-gradient-to-b hover:bg-gradient-to-l from-slate-100 dark:from-slate-800
                                     via-yellow-50 dark:via-black dark:hover:via-gray-900
                                     to-red-100 dark:to-gray-700
                  shadow-sm-light hover:shadow-2xl lg:border-r-8
                   border-fuchsia-500 dark:border-sky-500
                  rounded-3xl hover:rounded-2xl shadow-sky-500 hover:shadow-fuchsia-400 
                  dark:hover:shadow-sky-500 font-medium font-serif duration-300 hover:scale-[101%]
                  hover:ring-2 ring-green-500 dark:ring-teal-400 grow '>
        
        <h1 className='text-xl text-center h-9 rounded-lg font-black border-2'>
           ----------notice crash--------- 
        </h1>
        <p className='overflow-auto p-2'></p>
      </div>
    </div>
  )
}

export default AboutAndNotice_crash
