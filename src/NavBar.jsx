
import { Link } from 'react-router-dom'


const NavBar = () => {

  const linkStyles = {
    color: 'white',
    marginLeft: '25px',
    fontFamily: 'Bellefair',
    textDecoration: 'none',
    fontSize: '27px'
    
  }


  return ( 
    <div className="nav-bar">
      <div className="logo" >
        <h1>🚀</h1>
      </div>
      <div className="nav-links">
        <Link style={linkStyles} to={'/'}>00 Home</Link>
        <Link style={linkStyles} to={'/destination'}>01 Destinations</Link>
        <Link style={linkStyles} to={'/crew'}>02 Crew</Link>
        <Link style={linkStyles} to={'/technology'}>03 Technology</Link>
      </div>

    </div>
   );
}
 
export default NavBar;