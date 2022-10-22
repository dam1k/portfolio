const Contact = () => {
  return (
    <section id="contact">
    <div className="section-title"><h2>Contact</h2></div>
    <div className="blue-border"></div>
    <p className="section-desc">Leave me a message and let's work together!</p>
    
    <form action="https://formsubmit.co/78753d43ad4c4a2fe7a1e499d00e1348" 
    method="POST" 
    target="_blank"
    className="form-container">
      <input className="input" name="name" type="email" placeholder="Enter your Email" required/>
      <input className="input " name="email" type="text" placeholder="Enter your Name" required/>
      <textarea name="message" className="message " placeholder="Enter your message" required/>
      <button type="submit" className="blue-btn btn">Send Email</button>
    </form>
    </section>
  )
}

export default Contact