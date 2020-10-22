import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import Linkar from '@material-ui/core/Link';


const desativaLink = {
    ss:{
        textDecoration: 'none',
        margin: 10,
        width: "100%",
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
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
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
  },
 
}));



export default function CardSqueezes({infos}) {
  const classes = useStyles();

  return (

    <React.Fragment>

      <CssBaseline />

    

      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Squeezes
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Quickly build an effective pricing table for your potential customers with this layout.
          It&apos;s built with default Material-UI components with little customization.
        </Typography>
      </Container>
      {/* End hero unit */}



      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end"  justify="space-around">

          {/* {tiers.map((tier) => ( */}

            {infos.map(({nome, id, descricao, valor, foto}) => (

            // {/* // Enterprise card is full width at sm breakpoint
            // // <Grid item key={id} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}> */}
            <Grid item key={id} xs={12} sm={6} md={4} >

              <Card>
                <CardHeader
                  title={nome}
                  subheader={descricao}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                //   action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>

                <div className={classes.cardPricing} >
  
                        <CardMedia
                        className={classes.media}
                        image={foto.im1}
                        title={nome}
                        component="img"
                        />

                  </div>


                  <div className={classes.cardPricing}>
                    <Typography component="h4" variant="h5" color="textPrimary">
                      Disponivel em:
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      
                    </Typography>

                  </div>

                  <ul>
                    {/* {tier.description.map((line) => ( */}
                      <Typography component="li" variant="subtitle1" align="center" key={id}>
                            <strong>Aluminium</strong>  R$  {valor.val1}
                      </Typography>
                      <Typography component="li" variant="subtitle1" align="center" key={id}>
                            <strong>Plástico:</strong>  R$ {valor.val2}
                      </Typography>
                      {/* <Typography component="li" variant="subtitle1" align="center" key={id}>
                            <strong>Especificar:</strong>  R$ {valor.val3}
                      </Typography> */}
                    {/* ))} */}
                  </ul>
                </CardContent>
                <CardActions>

                

                <Linkar href={`https://api.whatsapp.com/send?phone=5571991604540&text=${nome} || ${descricao} 
                 ||  Valores: Aluminium: R$ ${valor.val1} - Plástico: R$ ${valor.val2} !`} 
                 target="blank" color="textSecondary" style={desativaLink.ss} >

                  <Button fullWidth variant={'contained'}  style={{backgroundColor: '#34af23', color: '#fff'}}>
                    Compre pelo Whatsapp
                  </Button>
                </Linkar>
                </CardActions>
              </Card>
            </Grid>
            
           ))} 
        </Grid>


      </Container>




    </React.Fragment>
  );
}