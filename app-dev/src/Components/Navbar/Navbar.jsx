import './Navbar.css'
import { Link } from 'react-scroll'
import { Link as Li } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
function Navbar() {
  const nav = useNavigate();
  return (
    <nav>
        <div className="navbar-left">
            <Link to='plan-section' smooth={true} onClick={()=> nav('/home/prepaid')}>Prepaid</Link>
            <Link to='plan-section' smooth={true} onClick={() => nav('/home/prepaid')}>Postpaid</Link>
            <Link to='/new'>New Connection</Link>
            <Link to='roaming'>International Roaming</Link>
        </div>
        <div className="navbar-right">
            <Li to="/history">History</Li>
            <Li to="/profile/update">Atimanyu</Li>
        </div>
    </nav>
  )
}

export default Navbar