import {useState, useEffect, useRef} from "react"

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false)
  const menuRef = useRef()
  const buttonRef = useRef()

  useEffect(()=> {
    if(toggleNav) {
      menuRef.current.className = 'menu active'
      buttonRef.current.className="burger toggle"
    } else {
      menuRef.current.className = 'menu'
      buttonRef.current.className="burger"
    }
    
  }, [toggleNav])

  return (
    <nav id="main-nav">
  <div className="logo">
    <a href="index.html">damianwebdev</a>
  </div>
  <ul className="menu" ref={menuRef}>
    <li className="link"><a href="index.html">Home</a></li>
    <li className="link"><a href="#skills">Skills</a></li>
    <li className="link"><a href="#contact">Contact</a></li>
    <li className="link"><a href="#about">About</a></li>
  </ul>
  <div className="burger" ref={buttonRef} onClick={()=>{setToggleNav(prevState => !prevState)}}>
    <div className="bar1" />
    <div className="bar2" />
    <div className="bar3" />
  </div>
</nav>
)
}

export default Navbar