const Contact = () => {
  return (
    <section id="contact">
    <div className="section-title"><h2>Contact</h2></div>
    <div className="blue-border"></div>
    <p className="section-desc">Leave me a message and let's work together!</p>
    
    <form action="https://formsubmit.co/damianbostan12@gmail.com" 
    method="POST" 
    target="_blank"
    className="form-container">
      <input className="input form-control" type="email" placeholder="Enter your Email" required/>
      <input className="input form-control" type="text" placeholder="Enter your Name" required/>
      <textarea className="message form-control" placeholder="Enter your message" required/>
      <button type="submit" className="blue-btn btn">Send Email</button>
    </form>
    </section>
  )
}

export default Contact