import { Link } from 'react-router-dom'

const Home = () => {
  return ( 
    <div className="home" style={{
      backgroundColor: '#0B0D17',
      color: '#D0D6F9',
    }}>
      <div className="home-text-container" style={{
        width: '300px',
        position: 'absolute',
        width: '400px',
        height: '302px',
        left: '165px',
        top: '387px'
      }}>
        <p >SO YOU WANT TO TRAVEL TO</p>
        <p style={{
          fontSize: '60px',
          fontFamily: 'bellefair',
          color: '#fff'
        }}>SPACE</p>
        <p style={{
          fontFamily: 'barlow',
          
        }}>
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </p>
      </div>
      <div className="explore-container" style={{
        position: 'absolute',
        width: '200px',
        height: '200px',
        left: '1001px',
        top: '495px',
        backgroundColor: 'white',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Link to={'/destination'} className="explore-link">EXPLORE</Link>
      </div>
    </div>
   );
}
 
export default Home;