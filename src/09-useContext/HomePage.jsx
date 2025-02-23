import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
  const {user} = useContext(UserContext);
  
    return (
      <>
          <h1>
              Home Page <small aria-label="username">{user?.name}</small>  
          </h1>
          <hr/>
          <pre aria-label="preTag">{ JSON.stringify(user, null, 3) }</pre>
      </>
    )
  }