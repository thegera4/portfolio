import './Menu.scss'
import HomeIcon from '@mui/icons-material/Home';
import ComputerIcon from '@mui/icons-material/Computer';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useTranslation } from "react-i18next";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CV from "../../assets/CV Juan Gerardo eng v3.pdf";

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
            <li onClick={() => setMenuOpen(false)}>
                <PhoneAndroidIcon style={{marginRight: 10}}/>(+52)87-12-75-95-53
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="mailto:thegera4@hotmail.com"><EmailIcon style={{marginRight: 10}}/>thegera4@hotmail.com</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href={CV} download><DownloadIcon style={{marginRight: 10}}/>{t("Download_CV")}</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="https://github.com/thegera4?tab=repositories" target="_blank" rel="noreferrer"><GitHubIcon style={{marginRight: 10}}/>{t("Github_Profile")}</a>
                
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="https://www.linkedin.com/in/juan-gerardo-medellin-ibarra-8b207058/?originalSubdomain=mx" target="_blank" rel="noreferrer"><LinkedInIcon style={{marginRight: 10}}/>{t("LinkedIn_Profile")}</a>
                
            </li>
        </ul>
    </div>
  )
}

export default Menu