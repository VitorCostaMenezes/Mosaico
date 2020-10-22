import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
    
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
  
    
  }));

export default function HeroUnit({titulo, texto1, texto2}) {

  const classes = useStyles();


    return (
        <Container maxWidth="sm" component="main" className={classes.heroContent} style={{marginTop: -50, marginBottom: 30, padding: 10}}>

        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          {/* Catálogo virtual */}
          {titulo}
        </Typography>

        <Typography variant="h6" align="center" color="textSecondary" component="p">
          {/* Confira nossos produtos e preços! */}
          {texto1}
        </Typography>
        
        <Typography variant="h6" align="center" color="textSecondary" component="p">
            {/* Para esclarecimento de dúvidas entre em contato conosco através da aba contatos. */}
            {texto2}
        </Typography>

      </Container>
    )
}
