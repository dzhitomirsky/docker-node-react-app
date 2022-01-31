import * as React from "react";
import { Routes, Route} from "react-router-dom";
import { UserList } from "../users";

export default () => (
  <Routes>
    <Route path="/" element={<UserList/>} />
    <Route path="/users" element={<UserList/>} />
  </Routes>
);