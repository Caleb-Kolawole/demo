import React from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
        <Link to={"/"}>Home</Link>
      <Link to={"/excel"}>Excel</Link>
      <Link to={"/paginate"}>PAginate</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/prime"}>Prime</Link>
    </div>
  )
}
