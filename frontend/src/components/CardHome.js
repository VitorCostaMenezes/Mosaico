import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    maxWidth: '100vh',
    textAlign: 'center',
    padding: 10,
   


  },
  media: {
    // height: '50vhw'
    // height: 300,
    borderRadius: 10
    
  },
  btn:{
      justifyContent: "center",
      marginBottom: 10,
  },
  btn2:{
      width:300,
      backgroundColor: '#000',
      borderRadius: 20,
      fontWeight: 'bold'
    
  },
  s:{
    textDecoration: 'none'
  },
 
});


export default function CardHome ({nome, foto}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardActionArea  >
        <CardMedia
          className={classes.media}
          image={foto}
          title={nome}
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h4" >
           {nome}
          </Typography>
         
        </CardContent>
      </CardActionArea >

      {/* <CardActions style={{justifyContent: "center"}}> */}
      <CardActions className={classes.btn}>
        {/* <Button size="small" color="primary" >
         Clique para ver
        </Button> */}

        <Button variant="contained" color="primary" size="large"  className={classes.btn2} >
             Clique para ver
         </Button>
        
      </CardActions>
    </Card>
  );
}
