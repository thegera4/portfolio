import './Topbar.scss'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';


function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">LOGO</a>
          <div className="itemContainer">
            <PersonIcon className="icon"/>
            <span>87-12-75-95-53</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon"/>
            <span>thegera4@hotmail.com</span>
          </div>     
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar