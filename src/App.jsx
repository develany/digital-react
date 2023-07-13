import "./Global.css";
import UserDetails from "./components/UserDetails";
function App(){
const pessoas = [
  {nome: 'Elany', idade: 26, profissao:'Dev', id:1},
  {nome: 'John', idade: 30, profissao:'Dev', id:2},
  {nome: 'Aladdin', idade: 7, profissao:'Pertubar', id:3}
]

  return ( 
    <>
      {pessoas.map((pessoa)=>(
      <UserDetails key={pessoa.id} nome={pessoa.nome} idade={pessoa.idade} profissao={pessoa.profissao}/>
     ))}
    </>
  )
  }
export default App;
