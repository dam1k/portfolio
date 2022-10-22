const Contact = () => {
  return (
    <section id="contact">
    <div className="section-title"><h2>Contact</h2></div>
    <div className="blue-border"></div>
    <p className="section-desc">Leave me a message and let's work together!</p>
    
    <form action="https://formsubmit.co/damianbostan12@gmail.com" 
    method="POST" 
    className="form-container">
      <input className="input" type="email" placeholder="Enter your Email" required/>
      <input className="input" type="text" placeholder="Enter your Name" required/>
      <textarea className="message" placeholder="Enter your message" required/>
      <button type="submit" className="blue-btn btn">Send Email</button>
    </form>
    </section>
  )
}

export default Contact