import { Link, Outlet } from "react-router-dom";
import Btn from "../../components/Btn";
import TitleCard from "../../components/Card";


export default function Promocao() {

    return (
        <>
            <main>
                <section className="container">
                    <div >
                        <Link to="/"> <TitleCard text='Página de promoção' /></Link>
                    </div>
                    <Link to="/subscription"><Btn text='Quero participar' /></Link>
                </section>
                <Outlet />
            </main>
        </>
    );
}
