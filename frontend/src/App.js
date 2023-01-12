import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Welcome from "../src/components/welcome/Welcome";
import NewClient from "./components/admin/clients/NewClient";
import Home from "./components/admin/Home";
import NewQuote from "./components/admin/quotes/NewQuote";
import NewWorkRequest from "./components/admin/requests/NewWorkRequest";
import SignIn from "./components/auth/SignIn";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Welcome />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/new_work_request" element={<NewWorkRequest />} />
          <Route path="/new_client" element={<NewClient />} />
          <Route path="/new_quote" element={<NewQuote />} />
        </Routes>
      </Router>
    </div>
  );
}
