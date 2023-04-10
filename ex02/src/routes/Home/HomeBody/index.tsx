import { Link } from "react-router-dom";
import Card from "../../../components/Card";
import Btn from "../../../components/Btn";


export default function HomeBody() {
    return (

        <>
            <main>
              <section>
                <div className="container mt mb">
                  <Link to="/">
                  <Card text="Página inicial"/>
                  </Link>
                  <div className="mt dflex">
                    <Link to="/promotion">
                    <Btn title="Ver promoção"/> 
                    </Link>
                  </div>
                </div>
              </section>
            </main>
        </>

    );
}
