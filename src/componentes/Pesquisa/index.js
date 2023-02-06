import Input from '../Input'
import styled from 'styled-components';
import { useState } from 'react';
import { livros } from './dadosPesquisa';

const PesquisaContainer = styled.section`
   background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
   color: #FFF;
   text-align: center;
   padding: 85px 0;
   height: 470px;
   width: 100%;
`
const Titulo = styled.h2`
   color: #FFF;
   font-size: 36px;
   text-align: center;
   width: 100%;
`
const Subtitulo = styled.h3`
   font-size: 16px;
   font-weight: 500;
   margin-bottom: 40px;
`
const Resultado = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 20px;
   cursor: pointer;
   p {
       width: 200px;
   }
   img {
       width: 100px;
   }
   &:hover {
       border: 1px solid white;
   }
`

const ItemResult = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   img {
    width: 100px;
   }
   p {
    width: 400px;
   }
`


function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Já sabe por onde começar?</Subtitulo>
            <Input
                placeholder="Escreva sua proxima leitura"
                onKeyUp={evento => {
                    const textoDigitado = evento.target.value.toLowerCase();
                    if (textoDigitado != '') {
                        const resultadoPesquisa = livros.filter(livro => livro.nome.toLowerCase().includes(textoDigitado));
                        setLivrosPesquisados(resultadoPesquisa);
                    }
                    else
                    {
                        setLivrosPesquisados([]);
                    }
                }}
            />
            {
                livrosPesquisados.map((livro) => (
                    <ItemResult>
                        <img src={livro.src}></img>
                        <p>{livro.nome}</p>
                    </ItemResult>
                ))
            }

        </PesquisaContainer>
    )
}

export default Pesquisa;