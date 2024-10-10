import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export default function LoginButton() {
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);

    return (
        <button onClick={toggleAuth}>
            {isAuthenticated ? "Logout" : "Login"}
        </button>
    )
}