
import { Routes, Route, Navigate} from 'react-router-dom';
import { LoginPage, HomePage, AboutPage } from './';
import { Navbar } from './Navbar';
export const Main = () => {
  return (
    <> 
        <h1>MainApp</h1>
        <Navbar/>
        <hr/>
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="about" element={<AboutPage/>}/>
            <Route path="home" element={<HomePage/>}/>
            {/* <Route path="/*" element={<LoginPage/>}/> */}
            <Route path="/*" element={<Navigate to="/"/>}/>
        </Routes>
    </>
  )
}
