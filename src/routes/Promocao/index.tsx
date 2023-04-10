import { Link, Outlet } from "react-router-dom";
import BtnNext from "../../components/Btn-next";
import TitleCard from "../../components/Card";
import Header from "../../components/Header";
import Home from "../Home";
import HomeBody from "../Home/HomeBody";


export default function Promocao() {

    return (
        <>
            <main>
                <section className="container">
                    <div >
                        <Link to="/"> <TitleCard text='Página de promoção' /></Link>
                    </div>
                    <Link to="/inscricao"><BtnNext text='Quero participar' /></Link>
                </section>
                <Outlet />
            </main>
        </>
    );
}
