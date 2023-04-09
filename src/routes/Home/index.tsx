
import { Link, useParams } from 'react-router-dom';
import BtnNext from '../../components/Btn-next';
import Header from '../../components/Header';
import TitleCard from '../../components/Title-card';
import Promocao from '../Promocao';

export default function Home() {
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