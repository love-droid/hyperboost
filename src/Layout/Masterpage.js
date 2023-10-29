import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './navbar';

export default function Masterpage(){
    return(
        <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
    )
}