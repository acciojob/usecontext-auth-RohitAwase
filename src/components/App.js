
import React from "react";
import './../styles/App.css';

import { AuthProvider } from "./AuthContext";
import Auth from "./Auth";

function App() {
  return (
    <AuthProvider>
      <Auth />
    </AuthProvider>
  );
}

export default App;

