import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>Home page</div>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <br></br>
        <NavLink to={"/hello"}>Hello</NavLink>
        <br></br>
        <NavLink to={"/401"}>401</NavLink>
        <br></br>
        <NavLink to={"/404"}>404</NavLink>
        <br></br>
      </nav>
    </>
  );
}
