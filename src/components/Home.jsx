import React from 'react';
import MyImage from '../assets/600.jpg';
import bgImage from '../assets/backgroundImg.png';
import project1 from '../assets/immaigration1.jpg'
import project2 from '../assets/immaigration2.jpg';
import project3 from '../assets/welcome3.jpg';
// import project4 from '../assets/wellcome.jpg';
import Instagram from '../assets/logo2.jpg'
import Facebook from '../assets/logo3.jpg'
import Linkedin from '../assets/logo4.jpg'


const Home = () => {
  return (
    <>
      <section>
        <div className='container m-auto px-12 py-10 flex gap-8'>
          <div>
            <h1 className='font-bold text-4xl'> Hello, I am PRABU</h1>
            <h1 className='font-bold text-4xl mt-1 gradiant-text'> MEAN stack developer</h1>
            <h1 className='mt-4 text-gray-400'>It is the core of both frontend and backend development using React and Node.js. Therefore, MERN stack developers must possess proficiency in ES6+ features, asynchronous programming, and functional programming concepts to effectively build websites. </h1>

          </div>
          <div className='relative'>
            <img src={MyImage} width={150} height={150} alt="MyImage" className='rounded-tl-lg relative rounded-br-lg z-10' />
            <img src={bgImage} alt="bg" width={350} height={850} className='absolute rounded-br-lg top-2 left-2 z-2' />
          </div>
        </div>
      </section>
      {/* project section */}
      <section>
        <div className='container flex  flex-row md:flex-col'>
          <h1 className='text-3xl font-semibold  hover:text-[#00df9a] my-12 px-12 py-10' >Projects</h1>
          {/* mew card project */}
          <div className=' flex items-center justify-center min-h-screen container mx-auto'>
            {/* Crid */}
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
              {/* card */}
              <div className='card rounded-xl shadow-lg border border-gray-500 p-5'>
                <div className=' p-5 flex-col'>
                  <div className=' rounded-xl overflow-hidden'>
                    <img src={project1} className='w-full h-auto' alt="Project1 text-lg font-semibold" />
                  </div>
                  <h5 className='text-2xl md:text-3xl font-medium mt-3'>First Ladder</h5>
                  <p className='text-slate-500 text-lg mt-3'>First-Ladder is an International Education, Immigration and Recruitment Consulting Company headquartered in Chennai, India. We are a leading global career consulting firm, providing innovative and customized solutions to students, job seekers and employers. Our process starts with developing an accurate profile of each candidate and using that as out database to match them with the available opportunities in terms of education and jobs. Our aim is to help students and professionals from all over the world to find opportunities that match their requirements, skillset, interests and aspirations, so that they can pursue their while achieving higher returns on investment.</p>
                  <button>hai</button>
                </div>

              </div>
              <div className='card rounded-xl shadow-lg border border-gray-500 p-5'>
                <div className=' p-5 flex-col'>
                  <div className=' rounded-xl overflow-hidden'>
                    <img src={project2} className='w-full h-auto' alt="Project1 text-lg font-semibold" />

                  </div>
                  <h5 className='text-2xl md:text-3xl font-medium mt-3'>PSP health care</h5>
                  <p className='text-slate-500 text-lg mt-3'>The exact cause of PSP is unknown, but research suggests that it involves progressive damage to cells in a few specific areas in the brain, mainly in the brain stem. The death of brain cells in one of these areas, the substantia nigra, accounts in part for the motor symptoms that PSP and Parkinson's have in common. The tau protein deposits that accumulate in nerve cells in PSP appear to spread to different regions of the brain and cause cells to stop working and die. This in turn destroys the neuronal connections that underlie healthy brain function.</p>
                  <button>hai</button>
                </div>

              </div>
              <div className='card rounded-xl shadow-lg border border-gray-500 p-5'>
                <div className=' p-5 flex-col'>
                  <div className=' rounded-xl overflow-hidden'>
                    <img src={project3} className='w-full h-auto' alt="Project1 text-lg font-semibold" />

                  </div>
                  <h5 className='text-2xl md:text-3xl font-medium mt-3'>Multi-speciality Clinic</h5>
                  <p className='text-slate-500 text-lg mt-3'>Multispeciality hospitals are hospitals that offer a wide range of medical services. These hospitals have the capability to treat many different types of illnesses and conditions. The doctors in these hospitals are specialists in their field</p><button>hai</button>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* Technology section */}
        <section className='my-12 px-12 py-10'>
          <div className='container m-auto px-4'>
            <h1 className='text-3xl font-semibold  hover:text-[#00df9a]'>Technologies</h1>

            <div className='mt-14 ml-10'>
              <div className=' mt-6'>
                <div className='flex justify-between items-center'>
                  <h2 className='font-semibold'>HTML</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-[96%] h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
              <div className=' mt-6'>
                <div className='flex justify-between items-center'>
                  <h2 className='font-semibold'>CSS $ Bootstrap $ Tailwind CSS</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-[90%] h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
              <div className=' mt-6'>
                <div className='flex justify-between items-center'>
                  <h2 className='font-semibold'>JavaScript</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-[70%] h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
              <div className=' mt-6'>
                <div className='flex justify-between items-center'>
                  <h2 className='font-semibold'>UI Design in Figma</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-[85%] h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
              <div className=' mt-6'>
                <div className='flex justify-between items-center'>
                  <h2 className='font-semibold'>React js</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-[74%] h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
              <div className=' mt-6'>
                <div className='flex justify-between items-center'>
                  <h2 className='font-semibold'>Node js</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-[60%] h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
              <div className=' mt-6'>
                <div className='flex justify-between items-center'>
                  <h2 className='font-semibold'>Flutter</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-[50%] h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
            </div></div>
        </section>
        {/* Additional Skills */}
        <section className=' px-12 py-10'>
          <div className='container m-auto px-4'>
            <h1 className='text-3xl font-semibold  hover:text-[#00df9a]'>Additional Skills</h1>
            <div className='flex justify-between w-[80%] mt-[2%] px-4'>
              <div>
                <p className=' font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-4'>Git</p>
              </div>
              <div>
                <p className=' font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-4'>TeamWork</p>
              </div>
              <div>
                <p className=' font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-4'>Quick Learning</p>
              </div>
              <div>
                <p className=' font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-4'>VS Code</p>
              </div>

            </div>
          </div>

        </section>
        {/* About page */}
        <section className='px-12 py-10'>
          <div className='container m-auto px-4 '>
            <h1 className='text-3xl font-semibold  hover:text-[#00df9a]'>About me</h1>
            <div className=' mt-12 relative before:absolute before:top-0 before:bottom-0 before:w-2 before:bg-white ml-20'>
              <div className='pl-6 relative'>
                <h3 className=' absolute -left-12 font-semibold text-lg'>
                  2024
                </h3>
                <p>
                  PGFSD,<br />
                  WHY Global service,Chennai
                </p>
              </div>
              <div className='pt-10 ml-6'>
                <h3 className=' absolute -left-12 font-semibold text-lg'>
                  2021
                </h3>
                <p>
                  BE Computer Science and Engineering,<br />
                  CSI Institute of Technology,Thovalai
                </p>
              </div>
              <div className='pt-10 ml-6'>
                <h3 className=' absolute -left-12 font-semibold text-lg'>
                  2017
                </h3>
                <p>
                  HSC,<br />
                  Government Boys High secondary School, Devapandalam
                </p>
              </div>
              <div className='pt-10 ml-6'>
                <h3 className=' absolute -left-12 font-semibold text-lg'>
                  2015
                </h3>
                <p>
                  SSLC,<br />
                  Government Boys High secondary School, Devapandalam
                </p>
              </div>
            </div>
          </div>
        </section>

      </section>
      {/* footer part */}
      <footer className='mt-4 mb-6'>
        <div className=' container m-auto flex justify-between w-[60%]'>
          <div>
            <p className='text-gray-300 text-sm'> Copy right @ 2023</p>
          </div>
          <div>
            <ul className='flex gap-4'>
              <li>
                <a href=""> <img src={Instagram} alt="Instagram" className='w-6' /></a>
              </li>
              <li>
                <a href=""> <img src={Facebook} alt="Facebook" className='w-6' /></a>
              </li>
              <li>
                <a href=""> <img src={Linkedin} alt="Linkedin" className='w-6' /></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home