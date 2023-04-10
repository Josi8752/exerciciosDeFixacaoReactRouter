import { Link } from "react-router-dom";
import BtnNext from "../../../components/Btn-next";
import Card from "../../../components/Card";


export default function HomeBody() {
    return (
        <>
            <main>
                <section className="container">
                    <div>
                        <Link to="/"> <Card text="Página inicial" /></Link>
                    </div>
                    <Link to="/promocao"><BtnNext text='Ver promoção' /></Link>
                </section>
            </main>
        </>
    )
}