export default function timeLine() {
  return (
    <div>
      {/* <!-- component --> */}
      <div className='min-h-screen bg-primary-500 py-6 flex flex-col justify-center sm:py-12'>
        <div>
          <h1 className='text-center text-2xl md:text-5xl text-white font-extrabold mb-8 uppercase'>Alur Aduan</h1>
          <div className='py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0'>
            <div className='relative text-gray-700 antialiased text-sm font-semibold'>
              {/* <!-- Vertical bar running through middle --> */}
              <div className='hidden sm:block w-1 bg-white absolute h-full left-1/2 transform -translate-x-1/2'></div>

              {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
              <div className='mt-6 sm:mt-0 sm:mb-12' data-aos='fade-up' data-aos-duration='1000'>
                <div className='flex flex-col sm:flex-row items-center'>
                  <div className='flex justify-start w-full mx-auto items-center'>
                    <div className='w-full sm:w-1/2 sm:pr-8'>
                      <div className='p-4 bg-white rounded shadow transition-all duration-100 ease-out hover:outline hover:outline-black hover:outline-1 cursor-pointer'>Warga atau masyarakat mengisi formulir aduan </div>
                    </div>
                  </div>
                  <div className='rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
              <div className='mt-6 sm:mt-0 sm:mb-12' data-aos='fade-down' data-aos-duration='1000' data-aos-delay='500'>
                <div className='flex flex-col sm:flex-row items-center'>
                  <div className='flex justify-end w-full mx-auto items-center'>
                    <div className='w-full sm:w-1/2 sm:pl-8'>
                      <div className='p-4 bg-white rounded shadow transition-all duration-100 ease-out hover:outline hover:outline-black hover:outline-1 cursor-pointer'>Admin menugaskan unit kerja Dishub yang akan menyelesaikan aduan</div>
                    </div>
                  </div>
                  <div className='rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
                    </svg>
                  </div>
                </div>
              </div>

              {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
              <div className='mt-6 sm:mt-0 sm:mb-12' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='1000'>
                <div className='flex flex-col sm:flex-row items-center'>
                  <div className='flex justify-start w-full mx-auto items-center'>
                    <div className='w-full sm:w-1/2 sm:pr-8'>
                      <div className='p-4 bg-white rounded shadow transition-all duration-100 ease-out hover:outline hover:outline-black hover:outline-1 cursor-pointer'>Petugas Dishub atau unit kerja yang berkaitan akan menyelesaikan aduan</div>
                    </div>
                  </div>
                  <div className='rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                </div>
              </div>

              {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
              {/* <div className='mt-6 sm:mt-0' data-aos='fade-down' data-aos-duration='1000' data-aos-delay='1500'>
                <div className='flex flex-col sm:flex-row items-center'>
                  <div className='flex justify-end w-full mx-auto items-center'>
                    <div className='w-full sm:w-1/2 sm:pl-8'>
                      <div className='p-4 bg-white rounded shadow transition-all duration-100 ease-out hover:outline hover:outline-black hover:outline-1 cursor-pointer'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                  </div>
                  <div className='rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                      />
                    </svg>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
