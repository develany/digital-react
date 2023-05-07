import "./Global.css";
import Apresentacao from "./components/Apresentacao";
import Button from "./components/Button";
import Tabela from "./components/Tabela";
import {  useState } from "react";

function App(){
  const dados = [
    {id:1, nome: 'elany', usuario:'elany1', email: 'elany@gmail.com'},
    {id:2, nome: 'john', usuario:'john1', email: 'john@gmail.com'},
    {id:3, nome: 'aladdim', usuario:'aladdim1', email: 'aladdin@gmail.com'}
  ]
  const [numero, setNumero] = useState(0);
  const contador = () => {
  const numeroNovo = numero + 1;
   if (numeroNovo <= 10) {
      setNumero(numeroNovo);
    }
  };

  return ( 
    <>
      <div id="aula1">
        <Apresentacao></Apresentacao>
      </div>

      <div id="aula2">
      <Button tipo="primary">Primary</Button>
      <Button tipo="danger">Danger</Button>
      <Button disabled>Disabled</Button>
      </div>

       <div id="ativTabela">
       <Tabela dados={dados}></Tabela>
       </div>
       <div id="aula3">
      <h1>{numero}</h1>
      <button onClick={contador}>Aumetar</button>
    </div>
    </>
  )
  }
export default App;
