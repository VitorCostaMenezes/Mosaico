import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CarouselHome from '../../components/CarouselHome';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HeroUnit from '../../components/HeroUnit';
import BlocoHome from '../../components/BlocoHome';


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));


export default function Teste() {

  const [allHome, setAllHome] = useState([]);  ///  o segredo são as chaves
  useEffect(() => {

    const getItens = async () => {
      const res = await fetch('http://localhost:3003/itens');
      const json = await res.json()
      const todoshome = json;
      setAllHome(todoshome.home);
    }
    getItens();
  }, [])


  const classes = useStyles();

  return (

    <React.Fragment>

        <CssBaseline />

        <Header />

        <Container maxWidth="lg" component="main" className={classes.heroContent} >
            <CarouselHome />
        </Container>

        <HeroUnit titulo={"Catálogo virtual"}
         texto1={"Confira nossos produtos e preços!"} 
         texto2={"Para esclarecimento de dúvidas entre em contato conosco através da aba contatos."}
         />

        <BlocoHome infos={allHome} />

        <Footer/>

    </React.Fragment>
  );
}