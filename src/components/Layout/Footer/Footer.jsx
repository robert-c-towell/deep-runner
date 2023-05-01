import SubtleButton from "../../UI/Buttons/SubtleButton";

import classes from './Footer.module.css';

const Footer = (props) => {
  return <footer>
  <div className={classes.homepage}>
    <div>RT</div>
  </div>
  <div className={classes.links}>
    <SubtleButton onClick={props.openGithub}>github</SubtleButton>
    <SubtleButton onClick={props.openSaveModal}>save</SubtleButton>
    <SubtleButton onClick={props.openShareModal}>share</SubtleButton>
    <SubtleButton onClick={props.restartState}>restart</SubtleButton>
    <SubtleButton onClick={props.toggleDarkMode}>
      {props.isDarkMode ? "burn" : "save"} your eyes
    </SubtleButton>
    <SubtleButton onClick={props.toggleSound}>
      sound {props.isSound ? "off" : "on"}
    </SubtleButton>
  </div>
</footer>
}

export default Footer;