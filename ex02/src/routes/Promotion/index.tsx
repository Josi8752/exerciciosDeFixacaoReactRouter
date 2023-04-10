import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Btn from "../../components/Btn";

export default function Promocao() {
  return (


    <>
      <main>
        <section>
          <div className="container mt mb">
            <Link to="/">
              <Card text="Página de promoção" />
            </Link>
            <div className="mt dflex">
              <Link to="/subscription">
                < Btn title="Quero participar" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>


  );
}