import './Menu.scss'
import HomeIcon from '@mui/icons-material/Home';
import ComputerIcon from '@mui/icons-material/Computer';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#intro"><HomeIcon style={{marginRight: 10}}/>Home</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#portfolio"><ComputerIcon style={{marginRight: 10}}/>Front End</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#works"><PhoneIphoneIcon style={{marginRight: 10}}/>Mobile</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#testimonials"><SpeakerNotesIcon style={{marginRight: 10}}/>Testimonials</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#contact"><ContactMailIcon style={{marginRight: 10}}/>Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu