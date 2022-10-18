import React from 'react'
const Contact = () => {

  const gotoContact=()=>{
    window.scrollTo({top:0,left:0,behavior:"smooth"});
    console.log("onclick")
  }

  return (
    <>
    
    <section className='contact' id='contact'>
      <div>
      <h2  data-aos="fade-up" data-aos-duration="1000">Get In Touch</h2>
      </div>
      <div>
      <p  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200">I’m looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!<br/>
      I'm always trying to giving my best. looking forward for your response.

      </p>
      <a href='https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSKhcBwnqSVgkfGjwxFHDzNVJZgfFVDPQbQbWWvVTHjfgvZxLWbhwhDgqJnTpnxTkqGTvGCL'  target="_blank"> <button className='button hire'  onClick={gotoContact}  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1500"  >Say Hello</button></a>
      </div>
      
    </section>
    <div className='cc'><img src="https://img.icons8.com/material-rounded/20/64feda/creative-commons.png" /><p> Designed & Built by Mohit Kansal</p></div>
    </>
  )
}

export default Contact
