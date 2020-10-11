import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Canecas from "./pages/Canecas";
import Squeezes from "./pages/Squeezes";
import Camisas from "./pages/Camisas";
import Teste from "./pages/Teste";
import Pagina from "./pages/Pagina";


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
          
        <Route path="/home" component={Home} />
        <Route path="/canecas" component={Canecas} />
        <Route path="/squeezes" component={Squeezes} />
        <Route path="/camisas" component={Camisas} />
        <Route path="/teste" component={Teste} />
        <Route path="/pagina" component={Pagina} />
       
      </Switch>
    </BrowserRouter>
  );
}
