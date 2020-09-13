import React from 'react';
import { Link } from "react-router-dom";


export default function Home () {
    return (

        <div>

            <Link to="/canecas" id="caneca">
            <span>CANECAS </span>
            </Link>

            <Link to="/squeezes" id="squeezes">
            <span> | SQUEEZES </span>
            </Link>

            <Link to="/camisas" id="camisas">
            <span> | CAMISAS</span>
            </Link>

        </div>
    )
}
