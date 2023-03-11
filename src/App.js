import './App.css';
import { useState, useEffect } from 'react';

//https://sujeitoprogramador.com/rn-api/?api=posts

function App() {

  const [nutri, setNutri] = useState([]);

  useEffect(() => {

    function loadApi() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setNutri(json);
        })
    }

    loadApi();
  }, []);

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item) => {
        return(
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>
            
            <img src={item.capa} alt={item.titulo} className="capa"/>

            <p className="subtitulo">{item.subtitulo}</p>

            <p className="categoria">Categoria: {item.categoria}</p>

            <a className="botao">Acessar</a>

          </article>
        )
      })}

    </div>
  );
}

export default App;
