import "./App.css";
import { DarkThemeProvider } from "./DarkThemeContext";
import Body from "./Page/Body";

function App() {
  return (
    <div className="app">
      <DarkThemeProvider>
        <Body />
      </DarkThemeProvider>
    </div>
  );
}

export default App;
