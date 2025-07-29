// import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/Register";
import SignInPage from "./pages/SignIn";
import FeedPage from "./pages/FeedPage";
import NavBar from "./components/Navbar";
import { useUser } from "./context/UserContext";
import "./App.css";

function App() {
  const { currentUser } = useUser();
  console.log(currentUser);

  return (
    <div className="bg-emerald-500">
      <div className="w-3xl mx-auto min-h-screen bg-gray-100 p-5">
        <NavBar />

        {!currentUser ? (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/feed" element={<FeedPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;
