import React from 'react'
import Album from './Teste';
// import Album from '../../components/Teste';

export default function RetornaItens({iten}) {

    return (
        <div>
            <div>
            <span>  {iten.map(({ id, nome, descricao, valor, linkMl, foto }) => {

                    return (
                      <label key={id}>      
                        
                        <span>Nome: {nome}</span> <br />
                        <span>Descricao: {descricao}</span><br />
                        <span>Valor: {valor}</span><br />
                        <span>Foto: {foto.im1}</span><br />
                        <span>link ML: {linkMl}</span><br /><br /><br />
      
                         {/* <Album id={id} nome={nome} descricao={descricao} valor={valor} linkMl={linkMl} foto={foto} /> */}
                      </label>
                    );
                    })} </span>


        </div>


        

            
        </div>
    )
}
