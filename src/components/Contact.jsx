import React from 'react'

const Contact = () => {
  return (
    <div className='w-[90%] md:w-1/2 h-[400px] mx-auto p-10 rounded-2xl  mt-10 mb-20'>
        <h1 className='text-3xl font-bold text-center mt-5 mb-10 text-[#6f1d1b]'>Contact Us</h1>    
        <div className='flex flex-col items-center gap-6'>
            <input type="text" placeholder='Your Name' className=' w-full p-3 rounded-lg shadow-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6f1d1b] hover:border-[#6f1d1b]' />
            <input type="email" placeholder='Your Email' className=' w-full p-3 rounded-lg shadow-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6f1d1b] hover:border-[#6f1d1b]' />
            <textarea placeholder='Your Message' className='w-full p-3 rounded-lg shadow-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6f1d1b] hover:border-[#6f1d1b]'></textarea>
            <button className='w-60 bg-[#6f1d1b] text-[#edede9] rounded-lg p-3 cursor-pointer hover:bg-[#edede9] hover:text-[#6f1d1b] transition duration-800 ease-in-out'>Send Message</button>

    </div>
    <div className="icons grid grid-cols-3 md:grid-cols-5 justify-items-center mt-10"> 
        
<lord-icon onClick={()=> window.open('https://www.youtube.com/')}
    src="https://cdn.lordicon.com/dbcganmh.json"
    trigger="hover"
    colors="primary:#6f1d1b,secondary:#edede9"
    style={{width:"50px", height:"50px", marginTop:"20px",}}>
</lord-icon>
<lord-icon onClick={() => window.open('https://www.instagram.com/jaydeepgandhi54/')}
    src="https://cdn.lordicon.com/tgyvxauj.json"
    trigger="hover"
    colors="primary:#6f1d1b,secondary:#6f1d1b"
    style={{width:"50px", height:"45px", marginTop:"20px"}}>
</lord-icon>
<lord-icon onClick={() => window.open('https://www.facebook.com/share/1HiVkyQBkJ/')}
    src="https://cdn.lordicon.com/bfoumeno.json"
    trigger="hover"
    colors="primary:#6f1d1b,secondary:#edede9"
    style={{width:"50px", height:"44px", marginTop:"20px"}}>
</lord-icon>
<lord-icon onClick={()=> window.open('https://github.com/jaydeeppal02')}
    src="https://cdn.lordicon.com/jjxzcivr.json"
    trigger="hover"
    colors="primary:#6f1d1b,secondary:#6f1d1b"
    style={{width:"50px", height:"55px", marginTop:"20px"}}>
</lord-icon>
<lord-icon onClick={() => window.open('https://www.linkedin.com/in/jaydeep-pal-4b5938276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')}
    src="https://cdn.lordicon.com/qgebwute.json"
    trigger="hover"
    colors="primary:#6f1d1b,secondary:#edede9"
    style={{width:"50px", height:"50px", marginTop:"20px"}}>
</lord-icon>

    </div>
    </div>
  )
}

export default Contact
