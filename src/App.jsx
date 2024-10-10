import "./App.css";
import { DarkThemeProvider } from "./DarkThemeContext";
import Body from "./Page/Body";
import LoginButton from "./Component/LoginButton";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <div className="app">
      <DarkThemeProvider>
        <AuthProvider>
          <Body />
          <LoginButton />
        </AuthProvider>
      </DarkThemeProvider>
    </div>
  );
}

export default App;
