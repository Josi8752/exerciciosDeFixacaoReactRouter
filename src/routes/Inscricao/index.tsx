import { Link } from "react-router-dom";
import Header from "../../components/Header";
import TitleCard from "../../components/Title-card";
import BtnNext from "../../components/Btn-next";


export default function Inscricao() {
    return (
        <>
            <Header />
            <main>
                <section className="container">
                    <div className="card ">
                        <Link to="/"> <TitleCard /></Link>
                    </div>
                    <Link to="promocao"><BtnNext text='Ver Promoção' /></Link>
                    
                </section>
            </main>
        </>
    )
}