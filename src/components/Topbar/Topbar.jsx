import './Topbar.scss'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTranslation } from "react-i18next";
import LanguageSelect from "../../languageSelect";

function Topbar({ menuOpen, setMenuOpen }) {

  const { t } = useTranslation();

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <LanguageSelect/>
          <div className="itemContainer">
            <PhoneAndroidIcon className="icon"/>
            <span>87-12-75-95-53</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon"/>
            <span>thegera4@hotmail.com</span>
          </div>  
          <div className="itemContainer">
            <DownloadIcon className="icon"/>
            <span>{t("Download_CV")}</span>
          </div>  
          <div className="itemContainer">
            <GitHubIcon className="icon"/>
            <span>{t("Github_Profile")}</span>
          </div>    
          <div className="itemContainer">
            <LinkedInIcon className="icon"/>
            <span>{t("LinkedIn_Profile")}</span>
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