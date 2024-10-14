import React from 'react'

function About() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <h1 className='text-6xl mb-4 text-black font-bold'>GitFolio</h1>
        <p className='text-center max-w-xl mb-4 text-2xl font-light'>An innovative platform that uses Github to empower users to get their own professional portfolios effortlessly by simply entering their GitHub ID. Showcase your coding prowess and contributions seamlessly with GitFolio.</p>
        <p>Developed by: <a href='https://twitter.com/_sirsimon_' target='__blank' rel='noreferrer' className='underline'>Anmol Pattnayak</a></p>
    </div>
  )
}

export default About