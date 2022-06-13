import './Menu.scss'
import HomeIcon from '@mui/icons-material/Home';
import ComputerIcon from '@mui/icons-material/Computer';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useTranslation } from "react-i18next";
import LanguageSelect from "../../languageSelect";

function Menu({ menuOpen, setMenuOpen }) {
     const { t } = useTranslation();

  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#intro"><HomeIcon style={{marginRight: 10}}/>{t("Home")}</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#portfolio"><ComputerIcon style={{marginRight: 10}}/>{t("Portfolio")}</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#contact"><ContactMailIcon style={{marginRight: 10}}/>{t("Contact")}</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu