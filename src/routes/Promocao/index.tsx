import { Link, Outlet } from "react-router-dom";
import BtnNext from "../../components/Btn-next";
import TitleCard from "../../components/Title-card";
import Header from "../../components/Header";


export default function Promocao() {

    return (
        <>
            <Header />
            <main>
                <section className="container">
                    <div className="card ">
                        <Link to="/"> <TitleCard /></Link>
                    </div>
                    <Link to="inscricao"><BtnNext text='Quero participar' /></Link>

                </section>
            </main>

        </>
    );
}
