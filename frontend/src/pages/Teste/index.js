import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Linkar from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import Logo from  '../../img/home/logoHome.png'
import { Link } from "react-router-dom";
import CarouselHome from '../../components/CarouselHome';
import Footer from '../../components/Footer';



const desativaLink = {
  ss:{
      textDecoration: 'none',
      margin: 10,
      width: "100%",
    }
}

const areaLogo = {
  area:{
      justifyContent: 'center',
    alignItems: 'center',
  }
}


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    // backgroundColor: 'yellow'
    
  },
  toolbar: {
    flexWrap: 'wrap',
    justifyContent: "space-around",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    fontSize: 14
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  }
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

      <AppBar position="static" color="default" elevation={0} className={classes.appBar} >
    
        <Toolbar className={classes.toolbar} >

                
                
        <Grid container   direction="row" justify="space-around" alignItems= "center" >
        

            {/* <Container maxWidth="lg" component="main" className={classes.heroContent}  > */}
            <Grid item  xs={12} sm={4} md={4}  lg={3}  >

              <Grid container
                direction="row"
                justify="space-around"
                alignItems="center">

                 <img class="d-block w-50 my-3" src={Logo} />          

              </Grid>


            </Grid>
            {/* </Container> */}

            {/* <Container maxWidth="xs" component="main" className={classes.heroContent}  > */}


          <Grid item  xs={12} sm={6} md={6}  lg={6}  >

          <Grid container
                direction="row"
                justify="space-around"
                alignItems= "center"
                >

              <nav class="my-3">
                <Linkar variant="button" color="textPrimary" href="#" className={classes.link} >
                  Quem somos
                </Linkar>
                <Linkar variant="button" color="textPrimary" href="#" className={classes.link}>
                  Produtos
                </Linkar>
                <Linkar variant="button" color="textPrimary" href="#" className={classes.link}>
                  Contatos
                </Linkar>
              </nav>
            {/* </Container> */}

            </Grid>
        
          </Grid>
          </Grid>
        </Toolbar>

      </AppBar>



      <Container maxWidth="lg" component="main" className={classes.heroContent} >
          <CarouselHome />
      </Container>



      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent} style={{marginTop: -50, marginBottom: 30, padding: 10}}>

        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Catálogo virtual
        </Typography>

        <Typography variant="h6" align="center" color="textSecondary" component="p">
          Confira nossos produtos e preços!
        </Typography>
        
        <Typography variant="h6" align="center" color="textSecondary" component="p">
            Para esclarecimento de dúvidas entre em contato conosco através da aba contatos.
        </Typography>

      </Container>
      {/* End hero unit */}




     <Container maxWidth="md" component="main">

        <Grid container spacing={5} alignItems="flex-end" justify="space-around">
        
          {allHome.map(({nome, id, link, foto, foto2, foto3}) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={id} xs={12} sm={6} md={4} >
              <Card>
                <CardHeader
                  title={nome}
                  // subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  // action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing} >
                  
                    <CardMedia
                      className={classes.media}
                      image={foto}
                      title={nome}
                      component="img"
                            />

                  </div>
                  
                </CardContent>


                <CardActions>
                <Link to={link} id="id" style={desativaLink.ss} >  

                    {/* <Button fullWidth variant={'outlined'} color="primary"> */}
                    <Button fullWidth variant={'contained'} color="primary">
                      {/* {tier.buttonText} */}
                      Clique para ver
                    </Button>

                  </Link>
                </CardActions>


              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>


    <Footer/>


    </React.Fragment>
  );
}