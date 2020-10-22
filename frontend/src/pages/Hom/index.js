import React , { useState, useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
 import { Link } from "react-router-dom";
import CardHome from '../../components/CardHome';
import Logo from  '../../img/home/logoHome.png'



const desativaLink = {
    ss:{
        textDecoration: 'none',
        margin: 10
      }
}

const areaLogo = {
    area:{
        justifyContent: 'center',
      alignItems: 'center',
    }
}

// const logo = Logo();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#FFF"
  },
  s:{
    textDecoration: 'none'
  },
  img: {
      width: "90%",
      maxHeight:400,
      minHeight: 250,
      margin: 30
  },
  areaLogo:{
      justifyContent: 'center',
      alignItems: 'center',
      

  }
  
}));


export default function CenteredGrid() {

    const [allHome, setAllHome] = useState([]);  ///  o segredo são as chaves
 
    useEffect(() => {
  
      const getItens = async () => {
  
      const res = await fetch('http://localhost:3003/itens');
        // const res = await fetch('http://localhost:1337/Mosaicos/1');
        // const res = await fetch('https://mosaicopersonalizados.herokuapp.com/Mosaicos/1');
        const json = await res.json()
  
        const todoshome = json;
  
        setAllHome(todoshome.home);
       
      }

      getItens();
  
    }, [])
  

  const classes = useStyles();

  return (
    <div className={classes.root}>
        
      <Grid container  justify="center"  >

        <Grid item xs={12} style={areaLogo.area}  >
          
            <Grid container
                direction="row"
                justify="space-around"
                alignItems="center">

              <img src={Logo} id="logo" className={classes.img} />
              

            </Grid>
        </Grid>



        <Grid item xs={12}  >
          
            <Grid container  direction="row" justify="space-around" alignItems="center"  >

                {allHome.map(({nome, id, link, foto}) => {
                    return(
                        <Grid container item xs={11} xl={12} sm={12} md={6} lg={4}  justify="center" alignItems="center" key={id} >
                            <Link to={link} id="id" style={desativaLink.ss}>  
                                <div >
                                    <CardHome nome={nome} foto={foto} />
                                </div>
                            </Link>
                        </Grid>
                            )                           
                        })
                }


                    {/* <Grid container item xs={12} xl={12} sm={12} md={6} lg={4} justify="center" alignItems="center"  >
                    <Link to="/canecas" id="canecas" style={link.ss}>
                             <CardHome item={"Squeezes"} descricao={"Squeezes"}/>
                         </Link>
                    </Grid>

                    {/* <Grid container item xs={12} xl={12} sm={12} md={6} lg={4} justify="center" alignItems="center"  >
                    <Link to="/squeezes" id="squeezes" style={link.ss}>
                             <CardHome item={"Squeezes"} descricao={"Squeezes"}/>
                         </Link>
                    </Grid>

                    <Grid container item xs={12} xl={12} sm={12} md={6} lg={4} justify="center" alignItems="center"  >
                        <Link to="/camisas" id="camisas" style={link.ss}>
                             <CardHome item={"Camisas"} descricao={"Camisas"}  />
                         </Link>
                    </Grid> */}

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
