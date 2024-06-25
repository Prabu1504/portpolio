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
        <div className='container m-auto px-12 py-10 flex  flex-row md:flex-col'>
          <h1 className='text-2xl font-semibold' >Projects</h1>
          <div className='flex gap-8 mt-10'>
            <div className='border  border-gray-500 rounded-md p-5'>
              <img src={project1} className='w-full h-auto' alt="Project1 text-lg font-semibold" />
              <h2 className='text-2xl font-semibold mt-5'>First Ladder</h2>
              <p className='text-gray-400 text-sm mt-2'>This webpage is the Abrout consultancy work and job all the move at the place  </p>
              <div className='flex justify-evenly mt-12 gap-10'>
                <button className='px-6 py-3 text-lg bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700'>Live Preview</button>
                <button className='px-6 py-3 text-lg border rounded-full hover:text-blue-500 hover:border-blue-500'>Checkout github</button>
              </div>
            </div>
            <div className='border  border-gray-500 rounded-md p-5'>
              <img src={project2} className='w-full h-auto' alt="Project1 text-lg font-semibold" />
              <h2 className='text-2xl font-semibold mt-5'>PSP health care </h2>
              <p className='text-gray-400 text-sm mt-2'>This page is the appointment in the doctor and date and time all the work of this the website thats work  </p>
              <div className='flex justify-evenly mt-12 gap-10'>
                <button className='px-6 py-3 text-lg bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700'>Live Preview</button>
                <button className='px-6 py-3 text-lg border rounded-full hover:text-blue-500 hover:border-blue-500'>Checkout github</button>
              </div>
            </div>
            <div className='border  border-gray-500 rounded-md p-5'>
              <img src={project3} className='w-full h-auto' alt="Project1 text-lg font-semibold" />
              <h2 className='text-2xl font-semibold mt-5'>PSP health care</h2>
              <p className='text-gray-400 text-sm mt-2'>This page is the appointment in the doctor and date and time all the work of this the website thats work</p>
              <div className='flex justify-evenly mt-14 gap-10'>
                <button className='px-6 py-3 text-lg bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700'>Live Preview</button>
                <button className='px-6 py-3 text-lg border rounded-full hover:text-blue-500 hover:border-blue-500'>Checkout github</button>

              </div>
            </div>
            <div className='border  border-gray-500 rounded-md p-5'>
              <img src={project3} className='w-full h-auto' alt="Project1 text-lg font-semibold" />
              <h2 className='text-2xl font-semibold mt-5'>First Ladder</h2>
              <p className='text-gray-400 text-sm mt-2'>This webpage is the Abrout consultancy work and job all the move at the place</p>
              <div className='flex justify-evenly mt-12 gap-10'>
                <button className='px-6 py-3 text-lg bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700'>Live Preview</button>
                <button className='px-6 py-3 text-lg border rounded-full hover:text-blue-500 hover:border-blue-500'>Checkout github</button>

              </div>
            </div>
            {/* <div className='border  border-gray-500 rounded-md p-5'>
              <img src={project4} className='w-full h-auto' alt="Project1 text-lg font-semibold" />
              <h2 className='text-2xl font-semibold mt-5'></h2>
              <p className='text-gray-400 text-sm mt-2'>Responsive HTML/CSS layout for online furnitures store.HTML5,CSS3 (SCSS) </p>
              <div className='flex justify-evenly mt-12'>
                <button className='px-6 py-3 text-lg bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700'>Live Preview</button>
                <button className='px-6 py-3 text-lg border rounded-full hover:text-blue-500 hover:border-blue-500'>Checkout github</button>

              </div>
            </div> */}
            
          </div>
        </div>
        {/* Technology section */}
        <section className='my-12 px-12 py-10'>
          <div className='container m-auto px-4'>
            <h1 className='text-2xl font-semibold'>Technologies</h1>

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
                  <h2 className='font-semibold'>CSS,Saas $ Bootstrap</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-[90%] h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
              <div className=' mt-6'>
                <div className='flex justify-between items-center'>
                  <h2 className='font-semibold'>Javascript</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-[70%] h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
              <div className=' mt-6'>
                <div className='flex justify-between items-center'>
                  <h2 className='font-semibold'>UI design in Figma</h2>
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
                  <h2 className='font-semibold'>Fluter</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-[50%] h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
            </div></div>
        </section>
        {/* Additional Skills */}
        <section className=' px-12 py-10'>
          <div className='container m-auto px-4'>
            <h1 className='text-2xl font-semibold'>Additional Skills</h1>
            <div className='flex justify-between w-[80%] mt-[2%]'>
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
          <div className='container m-auto '>
            <h1 className='text-2xl font-semibold'>About me</h1>
            <div className=' mt-12 relative before:absolute before:top-0 before:bottom-0 before:w-2 before:bg-white ml-20'>
              <div className='pl-6 relative'>
                <h3 className=' absolute -left-12 font-semibold text-lg'>
                  2024
                </h3>
                <p>
                  PGFSD,<br/>
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
                  HSC,<br/>
                  Government Boys High secondary School, Devapandalam
                </p>
              </div>
              <div className='pt-10 ml-6'>
                <h3 className=' absolute -left-12 font-semibold text-lg'>
                  2015
                </h3>
                <p>
                  SSLC,<br/>
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