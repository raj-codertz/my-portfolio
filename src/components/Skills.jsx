import {
    html,
    css,
    javascript,
    node,
    tailwind,
    mongo,
    react,
    github
} from '../assets'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
       {/* container */}
       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
           <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
            <p className='py-4'>// These are vthe technologies i've worked with</p>
           </div>

           <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={html} alt="html icon" />
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={css} alt="html icon" />
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={javascript} alt="html icon" />
                <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={react} alt="html icon" />
                <p className='my-4'>REACT JS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={node} alt="html icon" />
                <p className='my-4'>Node js</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={mongo} alt="html icon" />
                <p className='my-4'>Mongo DB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={github} alt="html icon" />
                <p className='my-4'>GITHUB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={tailwind} alt="html icon" />
                <p className='my-4'>Tailwind CSS</p>
            </div>
           </div>
       </div>
    </div>
  )
}

export default Skills