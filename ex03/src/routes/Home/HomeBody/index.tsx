import { Link } from "react-router-dom";
import Btn from "../../../components/Btn";
import Card from "../../../components/Card";


export default function HomeBody() {
    return (
        <>
            <main>
                <section className="container">
                    <div>
                        <Link to="/"> <Card text="Página inicial" /></Link>
                    </div>
                    <Link to="/promotion"><Btn text='Ver promoção' /></Link>
                </section>
            </main>
        </>
    )
}