import { useContext } from "react";
import { UserContext } from "./UserContext";

function Dashboard() {
  const { user, setUser } = useContext(UserContext);

  const changeUser = () => {
    setUser(user === "Guest" ? "Admin" : "Guest");
  };

  return (
    <div>
      <h2>User: {user}</h2>
      <button onClick={changeUser}>
        Change User
      </button>
    </div>
  );
}

export default Dashboard;
