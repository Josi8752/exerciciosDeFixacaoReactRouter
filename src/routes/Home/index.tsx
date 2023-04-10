
import { Link, Outlet, useParams } from 'react-router-dom';

import HomeBody from './HomeBody';
import Header from '../../components/Header';

export default function Home() {
    return (

        <>
            <Header />
            <Outlet />
        </>

    )
}