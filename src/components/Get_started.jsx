import React from 'react'
import './Hero.css'

const Get_started = () => {
  return (
    <>
    {/* <details>
  <summary>Click to expand</summary>
  <p>This is hidden content. Jab click karoge tab show hoga.</p>
</details> */}
<h1 className='text-2xl font-bold text-center mt-5 text-[#6f1d1b]'>All Ad type</h1>
{/* <p>the advertisement types you want to use for your campaign</p> */}
<p className='text-[13px] mx-auto block text-center text-[#636363]'>The advertisment available for your campaign</p>
<div className='grid md:grid-cols-3 lg:grid-cols-5 grid-cols-1 gap-3 w-[90%] mx-auto mt-10 get_started'>
  <div>
    {/* <h1>Television Advertising</h1> */}
  {/* <img src="./tv.png" alt="Television Advertising" style={{width:"150px", height:"150px", marginTop:"20px",}} /> */}
  </div>
  
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  {/* <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div> */}
</div>

<div className='mx-auto'>
  <h1 className='text-[#6f1d1b] text-center text-2xl font-bold mt-5'>Choose your ad type</h1>
  <p className='text-stone-600 text-[13px] text-center'>Select the advertising type you want to use for your campaign. </p>

  <div className='text-[#6f1d1b] md:font-medium text-sm md:text-base input_div w-full md:w-1/2 bg-[#edede9]  mx-auto mt-10 p-5 rounded-lg shadow-xl'>
    <form>
<input type="radio" /> Television Advertising -Ads shown during TV program breaks <br />
<input type="radio" /> YouTube Ads -Video ads shown before or during YouTube videos <br />
<input type="radio" /> Social Media Advertising -Targeted ads on social media platforms <br />
<input type="radio" /> Search Engine Marketing -Sponsored results displayed on search engines<br />
<input type="radio" /> Display Advertising -Banner and image ads on websites<br />  
<input type="radio" /> Influencer Marketing -Promotions by influencers to their audience<br />
<input type="radio" /> Email Marketing -Ads blended naturally within content<br />
<input type="radio" /> Native Advertising -Ads blended naturally within content <br />
<input type="radio" /> Mobile App Advertising -Ads displayed within mobile applications <br />
<input type="radio" /> Outdoor Advertising -Ads displayed on billboards and public places<br />
<input type="radio" /> E-mail Marketing -Promotional messages sent via email<br />
{/* <input type="submit" value="Continue" className='bg-[#6f1d1b] text-[#edede9] w-100 px-3 py-3 my-3' /> */}
<button className='bg-[#6f1d1b] text-[#edede9] px-3 py-2 w-1/2 md:w-1/4 my-3 rounded-md cursor-pointer '>Continue</button>
</form>
</div>

</div>
    </>
  )
}

export default Get_started
  