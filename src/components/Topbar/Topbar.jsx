import './Topbar.scss'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTranslation } from "react-i18next";
import LanguageSelect from "../../languageSelect";
import CV from "../../assets/CV Juan Gerardo eng v3.pdf";


function Topbar({ menuOpen, setMenuOpen }) { 

  const { t } = useTranslation();

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <LanguageSelect/>
          <div className="itemContainer">
            <PhoneAndroidIcon className="icon"/>
            <span>(+52) 87-12-75-95-53</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon"/>
            <span><a href="mailto:thegera4@hotmail.com">thegera4@hotmail.com</a></span>
          </div>  
          <div className="itemContainer">
            <DownloadIcon className="icon"/>
            <span><a href={CV} download>{t("Download_CV")}</a></span>
          </div>  
          <div className="itemContainer">
            <GitHubIcon className="icon"/>
            <span><a href="https://github.com/thegera4" target="_blank" rel="noreferrer">{t("Github_Profile")}</a></span>
          </div>    
          <div className="itemContainer">
            <LinkedInIcon className="icon"/>
            <span><a href="https://www.linkedin.com/in/juan-gerardo-medellin-ibarra-8b207058/?originalSubdomain=mx" target="_blank" rel="noreferrer">{t("LinkedIn_Profile")}</a></span>
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