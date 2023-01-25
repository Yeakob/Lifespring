import React from 'react'
import BlogData from './BlogData.json'
import { useState } from 'react'
import Nav from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Blogs = () => {
  var count1 = 0;
  var count2 = 0;
  var count3 = 0;
  var count4 = 0;
  var count5 = 0;
  var count6 = 0;
  const [click, setclick] = useState("All")
  const [mid, setmid] = useState(0);
  return (

    <div className='w-full flex flex-col flex-wrap justify-start items-start '>
      <Nav />
      <div className='lg:px-[5rem] px-10 flex flex-row flex-wrap pb-10 w-full'>

        <div className='w-full bg-slate-100 absolute left-0 px-20 py-5 text-start font-semibold text-slate-500 text-sm'>
          <span>Home</span> / <span> Blogs </span> / <span>{click}</span>
        </div>




        <div className='lg:w-4/6 h-auto w-full lg:pr-10 px-5 pt-10'>
        {click === 'All' && mid === 0 &&
          BlogData.map((items) => {
            if (items.tag1 === 'child') { count1++; }
            else if (items.tag1 === 'mental') { count2++; }
            else if (items.tag1 === 'diff') { count3++; }
            else if (items.tag1 === 'psychiatrist') { count4++; }
            else if (items.tag1 === 'psychologist') { count5++; }
            else if (items.tag1 === 'Lifspring') { count6++; }
            return (
              <div className=' w-full flex flex-row h-auto flex-wrap justify-center items-center my-20'>
                <div className='rounded-md overflow-hidden lg:w-[15rem] mr-2 w-full h-auto flex flex-wrap'>
                  <img className='hover:scale-110 ease-in-out duration-500 lg:w-[15rem] w-full rounded-md' src={items.img} alt="" />
                </div>
                <div className='pl-1 lg:w-3/5 w-full h-auto flex flex-wrap flex-col justify-start text-start'>
                <div onClick={() => { setmid(items.id) }} className='w-full h-auto text-xl font-bold py-1 hover:text-lime-500 duration-500 cursor-pointer'>{items.title}</div>
                  <div className='w-full h-auto flex flex-row justify-start py-2 font-semibold text-slate-500'>
                    <div className='pr-5'>{items.date}</div>
                    <div className='pl-5'>{items.viwes} Views</div>
                  </div>
                  <div className='w-full h-auto text-md font-semibold text-slate-500 py-2 '>{items.details}</div>
                  <div className='w-full h-auto text-sm font-semibold text-lime-400 cursor-pointer'>Read more - </div>
                </div>
                <div className='w-full bg-slate-200 h-[.1rem] mt-10 '></div>
              </div>
            )
          })
        }
        {click === 'child' && mid === 0 &&
          BlogData.map((items) => {
            if (items.tag1 === 'child') {
              count1++;
              return (
                <div className=' w-full flex flex-row h-auto flex-wrap justify-center items-center my-20'>
                  <div className='rounded-md overflow-hidden lg:w-[15rem] mr-2 w-full h-auto flex flex-wrap'>
                    <img className='hover:scale-110 ease-in-out duration-500 lg:w-[15rem] w-full rounded-md' src={items.img} alt="" />
                  </div>
                  <div className='pl-1 lg:w-2/3 w-full h-auto flex flex-wrap flex-col justify-start text-start'>
                  <div onClick={() => { setmid(items.id) }} className='w-full h-auto text-xl font-bold py-1 hover:text-lime-500 duration-500 cursor-pointer'>{items.title}</div>
                    <div className='w-full h-auto flex flex-row justify-start py-2 font-semibold text-slate-500'>
                      <div className='pr-5'>{items.date}</div>
                      <div className='pl-5'>{items.viwes} Views</div>
                    </div>
                    <div className='w-full h-auto text-md font-semibold text-slate-500 py-2 '>{items.details}</div>
                    <div className='w-full h-auto text-sm font-semibold text-lime-400 cursor-pointer'>Read more - </div>
                  </div>
                  <div className='w-full bg-slate-200 h-[.1rem] mt-10 '></div>
                </div>
              )
            }
            return null
          })
        }
        {click === 'mental' && mid === 0 &&
          BlogData.map((items) => {
            if (items.tag1 === 'mental') {
              count2++;
              return (
                <div className=' w-full flex flex-row h-auto flex-wrap justify-center items-center my-20'>
                  <div className='rounded-md overflow-hidden lg:w-[15rem] mr-2 w-full h-auto flex flex-wrap'>
                    <img className='hover:scale-110 ease-in-out duration-500 lg:w-[15rem] w-full rounded-md' src={items.img} alt="" />
                  </div>
                  <div className='pl-1 lg:w-2/3 w-full h-auto flex flex-wrap flex-col justify-start text-start'>
                  <div onClick={() => { setmid(items.id) }} className='w-full h-auto text-xl font-bold py-1 hover:text-lime-500 duration-500 cursor-pointer'>{items.title}</div>
                    <div className='w-full h-auto flex flex-row justify-start py-2 font-semibold text-slate-500'>
                      <div className='pr-5'>{items.date}</div>
                      <div className='pl-5'>{items.viwes} Views</div>
                    </div>
                    <div className='w-full h-auto text-md font-semibold text-slate-500 py-2 '>{items.details}</div>
                    <div className='w-full h-auto text-sm font-semibold text-lime-400 cursor-pointer'>Read more - </div>
                  </div>
                  <div className='w-full bg-slate-200 h-[.1rem] mt-10 '></div>
                </div>
              )
            }
            return null
          })
        }
        {click === 'diff' && mid === 0 &&
          BlogData.map((items) => {
            if (items.tag1 === 'diff') {
              count3++;
              return (
                <div className=' w-full flex flex-row h-auto flex-wrap justify-center items-center my-20'>
                  <div className='rounded-md overflow-hidden lg:w-[15rem] mr-2 w-full h-auto flex flex-wrap'>
                    <img className='hover:scale-110 ease-in-out duration-500 lg:w-[15rem] w-full rounded-md' src={items.img} alt="" />
                  </div>
                  <div className='pl-1 lg:w-2/3 w-full h-auto flex flex-wrap flex-col justify-start text-start'>
                  <div onClick={() => { setmid(items.id) }} className='w-full h-auto text-xl font-bold py-1 hover:text-lime-500 duration-500 cursor-pointer'>{items.title}</div>
                    <div className='w-full h-auto flex flex-row justify-start py-2 font-semibold text-slate-500'>
                      <div className='pr-5'>{items.date}</div>
                      <div className='pl-5'>{items.viwes} Views</div>
                    </div>
                    <div className='w-full h-auto text-md font-semibold text-slate-500 py-2 '>{items.details}</div>
                    <div className='w-full h-auto text-sm font-semibold text-lime-400 cursor-pointer'>Read more - </div>
                  </div>
                  <div className='w-full bg-slate-200 h-[.1rem] mt-10 '></div>
                </div>
              )
            }
            return null
          })
        }
        {click === 'psychiatrist' && mid === 0 &&
          BlogData.map((items) => {
            if (items.tag1 === 'psychiatrist') {
              count4++;
              return (
                <div className=' w-full flex flex-row h-auto flex-wrap justify-center items-center my-20'>
                  <div className='rounded-md overflow-hidden lg:w-[15rem] mr-2 w-full h-auto flex flex-wrap'>
                    <img className='hover:scale-110 ease-in-out duration-500 lg:w-[15rem] w-full rounded-md' src={items.img} alt="" />
                  </div>
                  <div className='pl-1 lg:w-2/3 w-full h-auto flex flex-wrap flex-col justify-start text-start'>
                  <div onClick={() => { setmid(items.id) }} className='w-full h-auto text-xl font-bold py-1 hover:text-lime-500 duration-500 cursor-pointer'>{items.title}</div>
                    <div className='w-full h-auto flex flex-row justify-start py-2 font-semibold text-slate-500'>
                      <div className='pr-5'>{items.date}</div>
                      <div className='pl-5'>{items.viwes} Views</div>
                    </div>
                    <div className='w-full h-auto text-md font-semibold text-slate-500 py-2 '>{items.details}</div>
                    <div className='w-full h-auto text-sm font-semibold text-lime-400 cursor-pointer'>Read more - </div>
                  </div>
                  <div className='w-full bg-slate-200 h-[.1rem] mt-10 '></div>
                </div>
              )
            }
            return null
          })
        }
        {click === 'psychologist' && mid === 0 &&
          BlogData.map((items) => {
            if (items.tag1 === 'psychologist') {
              count5++;
              return (
                <div className=' w-full flex flex-row h-auto flex-wrap justify-center items-center my-20'>
                  <div className='rounded-md overflow-hidden lg:w-[15rem] mr-2 w-full h-auto flex flex-wrap'>
                    <img className='hover:scale-110 ease-in-out duration-500 lg:w-[15rem] w-full rounded-md' src={items.img} alt="" />
                  </div>
                  <div className='pl-1 lg:w-2/3 w-full h-auto flex flex-wrap flex-col justify-start text-start'>
                  <div onClick={() => { setmid(items.id) }} className='w-full h-auto text-xl font-bold py-1 hover:text-lime-500 duration-500 cursor-pointer'>{items.title}</div>
                    <div className='w-full h-auto flex flex-row justify-start py-2 font-semibold text-slate-500'>
                      <div className='pr-5'>{items.date}</div>
                      <div className='pl-5'>{items.viwes} Views</div>
                    </div>
                    <div className='w-full h-auto text-md font-semibold text-slate-500 py-2 '>{items.details}</div>
                    <div className='w-full h-auto text-sm font-semibold text-lime-400 cursor-pointer'>Read more - </div>
                  </div>
                  <div className='w-full bg-slate-200 h-[.1rem] mt-10 '></div>
                </div>
              )
            }
            return null
          })
        }
        {click === 'Lifspring' && mid === 0 &&
          BlogData.map((items) => {
            if (items.tag1 === 'Lifspring') {
              count6++;
              return (
                <div className=' w-full flex flex-row h-auto flex-wrap justify-center items-center my-20'>
                  <div className='rounded-md overflow-hidden lg:w-[15rem] mr-2 w-full h-auto flex flex-wrap'>
                    <img className='hover:scale-110 ease-in-out duration-500 lg:w-[15rem] w-full rounded-md' src={items.img} alt="" />
                  </div>
                  <div className='pl-1 lg:w-2/3 w-full h-auto flex flex-wrap flex-col justify-start text-start'>
                    <div onClick={() => { setmid(items.id) }} className='w-full h-auto text-xl font-bold py-1 hover:text-lime-500 duration-500 cursor-pointer'>{items.title}</div>
                    <div className='w-full h-auto flex flex-row justify-start py-2 font-semibold text-slate-500'>
                      <div className='pr-5'>{items.date}</div>
                      <div className='pl-5'>{items.viwes} Views</div>
                    </div>
                    <div className='w-full h-auto text-md font-semibold text-slate-500 py-2 '>{items.details}</div>
                    <div className='w-full h-auto text-sm font-semibold text-lime-400 cursor-pointer'>Read more - </div>
                  </div>
                  <div className='w-full bg-slate-200 h-[.1rem] mt-10 '></div>
                </div>
              )
            }
            return null
          })
        }
        {
          mid !== 0 &&
          BlogData.map((items) => {
            if (items.id === mid) {
              return (
                <div className='w-full h-auto text-start flex flex-wrap flex-col justify-start'>
                  <div className='w-full h-auto flex flex-col justify-center items-center pt-10'>
                    <div className=' w-full h-auto shadow-md'> <div onClick={() => { setmid(0) }} className='bg-green-700 text-sm text-white rounded-sm cursor-pointer font-semibold  absolute px-7 py-2 text-center flex items-center justify-center'> Back</div></div>
                    <div className='w-full'>
                      <img className='w-full pt-10 rounded-lg' src={items.img} alt="" />
                    </div>
                    <div className='w-full h-auto flex flex-row justify-around py-5 text-sm font-semibold text-slate-500 items-center'>
                      <div>
                        <img src="" alt="" />{items.pname}
                      </div>
                      <div>{items.date}</div>
                      <div>{items.count} views</div>
                      <div>Comment</div>
                    </div>

                    <div className='w-full py-5 text-2xl text-slate-600 font-semibold'>{items.title}</div>

                    <div className='py-5 w-full text-xl leading-10 text-slate-500'>{items.cont1}</div>
                    <div className='py-5 w-full text-xl leading-10 text-slate-500'><img className='w-full' src={items.img1} alt="" /></div>
                    <div className='py-5 w-full text-xl leading-10 text-slate-500'>{items.cont2}</div>
                    <div className='py-5 w-full text-xl leading-10 text-slate-500'><img className='w-full' src={items.img2} alt="" /></div>
                    <div className='py-5 w-full text-xl leading-10 text-slate-500'>{items.cont3}</div>
                    <div className='py-5 w-full text-xl leading-10 text-slate-500'><img className='w-full' src={items.img3} alt="" /></div>
                    <div className='py-5 w-full text-xl leading-10 text-slate-500'>{items.cont4}</div>

                    <div className='w-full text-2xl font-semibold'>
                      Related Posts
                    </div>
                    <div className='w-full flex flex-wrap justify-start py-5'>
                      <h1 className='w-full text-2xl text-slate-800 font-semibold'>Leave your thought here</h1>
                      <p className='w-full text-lg text-slate-500 py-3 font-semibold'>Your email address will not be published. Required fields are marked *</p>
                      <input className='bg-slate-100 my-2 mx-3 py-3 w-[22rem] h-auto' type="text" name="" placeholder='Your Name*' id="" />
                      <input className='bg-slate-100 my-2 mx-3 py-3 w-[22rem] h-auto' type="text" name="" placeholder='Your Email*' id="" />
                      <input className='bg-slate-100 my-2 mx-3 py-3 h-[8rem] w-full flex justify-start items-start' type="text" name="" placeholder='Your Comment' id="" />
                      <div className='w-full '><input className='px-1 mx-3' type="checkbox" name="" id="" />Save my name, email, and website in this browser for the next time I comment.</div>
                      <div className='w-full py-5'> <button className='bg-green-700 px-7 text-white rounded-md py-3 hover:bg-lime-500 duration-500'>Submit</button></div>
                    </div>

                  </div>
                </div>
              )
            }
            return null
          })
        }

      </div>
          <div className='lg:w-2/6 h-auto sm:w-full flex flex-col flex-wrap mt-[2rem] px-5 pt-10'>
            <div className='w-full flex flex-col justify-start items-start pt-10 flex-wrap'>
              <h1 className='text-lg font-semibold text-slate-600 '>Search</h1>
              <div className='w-full bg-slate-200 h-[.1rem] mt-2 '></div>
              <div className='w-full '><input onKeyPress={(e) => setclick(e.target.value)} className='w-full border-2 mt-5 p-2 bg-slate-100 rounded-md' type="text" placeholder='Search....' /> </div>

            </div>
            <div className='w-full flex flex-col justify-start items-start pt-5 flex-wrap'>
              <h1 className='text-lg font-semibold text-slate-600 '>Categories</h1>
              <div className='w-full bg-slate-200 h-[.1rem] mt-2 mb-3'></div>
              <div onClick={() => {setmid(0); setclick("child") }} className='w-full flex justify-between py-3 text-slate-500 hover:text-lime-500 cursor-pointer'><h1>Child Psychiatrists in Dhaka</h1> <h1>({count1})</h1></div>
              <div onClick={() => {setmid(0); setclick("diff") }} className='w-full text-start flex justify-between py-3 text-slate-500 hover:text-lime-500 cursor-pointer'><h1>Differences Between A Psychiatrist And A Therapist</h1> <h1>({count3})</h1></div>
              <div onClick={() => {setmid(0); setclick("") }} className='w-full flex justify-between py-3 text-slate-500 hover:text-lime-500 cursor-pointer'><h1>Female Psychiatrists</h1> <h1>({5})</h1></div>
              <div onClick={() => {setmid(0); setclick("Lifspring") }} className='w-full flex justify-between py-3 text-slate-500 hover:text-lime-500 cursor-pointer'><h1>LifeSpring</h1> <h1>({count6})</h1></div>
              <div onClick={() => {setmid(0); setclick("mental") }} className='w-full flex justify-between py-3 text-slate-500 hover:text-lime-500 cursor-pointer'><h1>Mental Health</h1> <h1>({count2})</h1></div>
              <div onClick={() => {setmid(0); setclick("psychiatrist") }} className='w-full flex justify-between py-3 text-slate-500 hover:text-lime-500 cursor-pointer'><h1>Psychiatrist in Dhaka</h1> <h1>({count4})</h1></div>
              <div onClick={() => {setmid(0); setclick("psychologist") }} className='w-full flex justify-between py-3 text-slate-500 hover:text-lime-500 cursor-pointer'><h1>Psychologists in Dhaka</h1> <h1>({count5})</h1></div>
            </div>
            <div className='w-full flex flex-col justify-start items-start pt-5 flex-wrap'>
              <h1 className='text-lg font-semibold text-slate-600 '>Popular Tags</h1>
              <div className='w-full bg-slate-200 h-[.1rem] mt-2 mb-3'></div>
              <div className='w-full flex flex-row flex-wrap '>
                <div onClick={() => {setmid(0); setclick("mental") }} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Best Mental Health Counsellors</div>
                <div onClick={() => {setmid(0); setclick("psychologist") }} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Best Psychologists in Bangladesh</div>
                <div onClick={() => {setmid(0); setclick("psychologist") }} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Best psychologists in Dhaka city</div>
                <div onClick={() => {setmid(0); setclick("child") }} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Child Development Center</div>
                <div onClick={() => {setmid(0); setclick("child") }} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Child Psychiatrist in Dhaka</div>
                <div onClick={() => {setmid(0); setclick("child") }} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Child Psychiatrists in Dhaka</div>
                <div onClick={() => {setmid(0); setclick("psychologist") }} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Clinical Psychologists</div>
                <div onClick={() => {setmid(0); setclick("psychologist") }} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Clinical Psychologists & Therapists</div>
                <div onClick={() => {setmid(0); setclick("mental") }} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Corporate mental health Bangladesh</div>
                <div onClick={() => {setmid(0); setclick("psychologist") }} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Counselling Psychologists in Dhaka</div>
                <div onClick={() => {setmid(0); setclick("diff") }} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Difference Between a Therapist</div>
                <div onClick={() => {setmid(0); setclick("diff") }} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Differences Between A Psychiatrist And A Therapist</div>
                <div onClick={() => {setmid(0); setclick("diff") }} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Different Types of Psychiatrists</div>
                <div onClick={() => {setmid(0); setclick("female") }} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Female Psychiatrists in Dhaka</div>
                <div onClick={() => {setmid(0); setclick("female") }} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Female Psychologists in Bangladesh</div>
                <div onClick={() => {setmid(0); setclick("psychiatrist") }} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>How to Become A Psychiatrist</div>
                <div onClick={() => {setmid(0); setclick("mental") }} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>mental healthcare services</div>
                <div onClick={() => {setmid(0); setclick("mental") }} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Mental Health in Bangladesh</div>
              </div>
            </div>
          </div>
         
    </div>
    <Footer />
  </ div>
  )
}

export default Blogs
