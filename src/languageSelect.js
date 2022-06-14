import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import Spanish from './assets/sp.png'
import English from './assets/en.png'
import { connect } from "react-redux";
import { setLanguage } from "./actions/index";


const languageMap = {
  en: { label: "English", dir: "ltr", active: true },
  es: { label: "Español", dir: "ltr", active: false }
};

const LanguageSelect = (props) => {
 
  const [selected, setSelected] = React.useState("en");

  const { t } = useTranslation();

  const [menuAnchor, setMenuAnchor] = React.useState(null);

  React.useEffect(() => {
    document.body.dir = languageMap[selected].dir;
    props.setLanguage(selected);
  }, [menuAnchor, props, selected]);

  return (
    <div
    className="d-flex justify-content-end align-items-center language-select-root">
      <Button style={{color: "black"}} lang= {selected} onClick={({ currentTarget }) => setMenuAnchor(currentTarget)}>
            <img 
            style={{ width: '20px'}} 
            src={languageMap[selected].label === "English" ? English : Spanish} 
            alt="Flag"/>
            {languageMap[selected].label}
           
        <ArrowDropDown fontSize="small" style={{color: "black"}}  />
      </Button>
      <Popover
        open={!!menuAnchor}
        anchorEl={menuAnchor}
        onClose={() => setMenuAnchor(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <div>
          <List>
            <ListSubheader>{t("select_language")}</ListSubheader>
            {Object.keys(languageMap)?.map(item => (
              <ListItem
                button
                key={item}
                onClick={() => {
                  i18next.changeLanguage(item);
                  setMenuAnchor(null);
                  setSelected(item);
                }}
              >
                {languageMap[item].label}
              </ListItem>
            ))}
          </List>
        </div>
      </Popover>
    </div>
  );
};

export function mapStateToProps(state){
  return {
    language: state.language
  };
}

export function mapDispatchToProps(dispatch){
  return {
    setLanguage: language => dispatch(setLanguage(language))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelect);

