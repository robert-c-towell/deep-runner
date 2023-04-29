import { ReactComponent as BlackHole } from "./assets/run_away_black_hole.svg";
import TextReveal from "./components/UI/TextReveal";
import Wakeup from "./components/Wakeup/Wakeup";

function App() {
  return (
    <>
      <BlackHole width="800px" height="auto" />
      <Wakeup />

      <footer className="footer"></footer>
    </>
  );
}

export default App;
