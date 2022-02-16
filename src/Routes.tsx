import { FC } from "react";
import {Routes, Route } from "react-router-dom";
import Main from "./main";
import Login from "./Components/Login";



const Routing: FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
};
export default Routing;