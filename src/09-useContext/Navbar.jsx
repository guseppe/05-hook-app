import { Routes, Route, Navigate, Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    <>  
        <Link to="/">Login</Link>
        <Link to="/about">About</Link>
        <Link to="/home">Home</Link>
    </>
  )
}
