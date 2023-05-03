import { useState } from "react";
import SaveModal from "./components/Layout/Footer/SaveModal";
import ShareModal from "./components/Layout/Footer/ShareModal";
import NavigationBar from "./components/Layout/Navigation/NavigationBar";

import classes from "./App.module.css";
import Footer from "./components/Layout/Footer/Footer";
import MainContent from "./components/Layout/MainContent/MainContent";

function App() {
  const [saveModalIsOpen, setSaveModalIsOpen] = useState(false);
  const [shareModalIsOpen, setShareModalIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSound, setIsSound] = useState(false);

  const openGithub = () => {
    window.open("https://github.com/robert-c-towell/deep-runner");
  };

  const openSaveModal = () => {
    setSaveModalIsOpen(true);
  };

  const closeSaveModal = (action) => {
    setSaveModalIsOpen(false);
    if (action === "import") {
    }
  };

  const openShareModal = () => {
    setShareModalIsOpen(true);
  };

  const closeShareModal = () => {
    setShareModalIsOpen(false);
  };

  const restartState = () => {};

  const toggleDarkMode = () => {
    setIsDarkMode((p) => {
      return !p;
    });
  };

  const toggleSound = () => {
    setIsSound((p) => {
      return !p;
    });
  };

  return (
    <div className={classes.App}>
      {saveModalIsOpen ? <SaveModal onClose={closeSaveModal} /> : <></>}
      {shareModalIsOpen ? <ShareModal onClose={closeShareModal} /> : <></>}
      <NavigationBar />
      <MainContent />
      <Footer
        isDarkMode={isDarkMode}
        isSound={isSound}
        openGithub={openGithub}
        openSaveModal={openSaveModal}
        openShareModal={openShareModal}
        restartState={restartState}
        toggleDarkMode={toggleDarkMode}
        toggleSound={toggleSound}
      />
    </div>
  );
}

export default App;
