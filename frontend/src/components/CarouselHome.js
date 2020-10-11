import React from 'react';
import Campanha1 from  '../img/carousel/campanha1.png';
import Campanha2 from  '../img/carousel/campanha2.png';
import Campanha3 from  '../img/carousel/campanha3.png';
import Campanha4 from  '../img/carousel/campanha4.png';
import Campanha5 from  '../img/carousel/campanha5.png';
import Campanha6 from  '../img/carousel/campanha6.png';



export default function CarouselHome() {
    return (
        <div style={{marginTop: -40}}>
             <div id="carouselExampleIndicators" class="carousel slide m-3" data-ride="carousel" >
                <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                </ol>
                <div class="carousel-inner">
                <div class="carousel-item active" >
                    <img class="d-block w-100" src={Campanha1} alt="Primeiro Slide" style={{borderRadius:5}}/>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100"src={Campanha2} alt="Segundo Slide" style={{borderRadius:5}}/>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={Campanha3} alt="Terceiro Slide" style={{borderRadius:5}}/>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={Campanha4} alt="Quarto Slide" style={{borderRadius:5}}/>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={Campanha5} alt="Quinto Slide" style={{borderRadius:5}}/>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={Campanha6} alt="Sexto Slide" style={{borderRadius:5}}/>
                </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                {/* <span class="carousel-control-prev-icon " aria-hidden="true"></span> */}
                <i class="fas fa-chevron-circle-left fa-2x ml-2"></i>

                <span class="sr-only">Anterior</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                {/* <span class="carousel-control-next-icon " aria-hidden="true"></span> */}
                <i class="fas fa-chevron-circle-right fa-2x "></i> 

                <span class="sr-only">Próximo</span>
                </a>
            </div>
            
        </div>
    )
}
