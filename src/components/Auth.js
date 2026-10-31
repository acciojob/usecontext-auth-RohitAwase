
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Auth() {
  const { isAuthenticated, toggleAuth } =
    useContext(AuthContext);

  return (
    <div>
      <h2>Robot Verification</h2>

      <label>
        <input
          type="checkbox"
          checked={isAuthenticated}
          onChange={(e) => toggleAuth(e.target.checked)}
        />
        I'm not a robot
      </label>

      {isAuthenticated ? (
        <h3 style={{ color: "green" }}>
          You are authenticated!
        </h3>
      ) : (
        <h3 style={{ color: "red" }}>
          Please verify that you are not a robot.
        </h3>
      )}
    </div>
  );
}

export default Auth;
