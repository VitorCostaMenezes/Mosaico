import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
 import { Link } from "react-router-dom";
import CardHome from '../../components/CardHome';


// import styled from 'styled-components';
 

// const StyledLink = styled(Link)`
//     text-decoration: none;

//     &:focus, &:hover, &:visited, &:link, &:active {
//         text-decoration: none;
//     }
// `;









export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        
      <Grid container  >

        <Grid item xs={12} style={{backgroundColor: "green"}}>
          <div>
              <span>HEADER</span>
          </div>
        </Grid>



        <Grid item xs={12} spacing={1} >
          
            <Grid container xs={12} direction="row" justify="space-around" alignItems="center"  >

               
                    <Grid container item xs={12} xl={12} sm={12} md={6} lg={4} justify="center" alignItems="center"  >
                         <Link to="/canecas" id="caneca">
                             <CardHome item={"Canecas"} descricao={"Canecas"}/>
                         </Link>
                    </Grid>


                    <Grid container item xs={12} xl={12} sm={12} md={6} lg={4} justify="center" alignItems="center"  >
                    <Link to="/squeezes" id="squeezes">
                             <CardHome item={"Squeezes"} descricao={"Squeezes"}/>
                         </Link>
                    </Grid>

                    <Grid container item xs={12} xl={12} sm={12} md={6} lg={4} justify="center" alignItems="center"  >
                        <Link to="/camisas" id="camisas">
                             <CardHome item={"Camisas"} descricao={"Camisas"} className={classes.s} />
                         </Link>
                    </Grid>




            </Grid>


        </Grid>

        
        <Grid item xs={12} style={{backgroundColor: "yellow"}}>
            <div>
                <br />
                <br />
                <span>RODAPÉ</span>
            </div>
        </Grid>



        
      </Grid>
    </div>
  );
}






















// import React from 'react';
// import { Link } from "react-router-dom";
// import CardHome from '../../components/CardHome';


// export default function Home () {
//     return (

//         <div>

//             <Link to="/canecas" id="caneca">
//             <span>CANECAS </span>
//             </Link>

//             <Link to="/squeezes" id="squeezes">
//             <span> | SQUEEZES </span>
//             </Link>

//             <Link to="/camisas" id="camisas">
//             <span> | CAMISAS</span>
//             </Link>

//             {/* <CardHome /> */}

//         </div>
//     )
// }






// export default function Home () {
//     return (

//         <div>

//             <Link to="/canecas" id="caneca">
//             <span>CANECAS </span>
//             </Link>

//             <Link to="/squeezes" id="squeezes">
//             <span> | SQUEEZES </span>
//             </Link>

//             <Link to="/camisas" id="camisas">
//             <span> | CAMISAS</span>
//             </Link>

//         </div>
//     )
// }
