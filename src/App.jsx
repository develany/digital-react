import Apresentacao from "./Apresentacao";
import Button from "./Button";
import "./Global.css"
import Tabela from "./Tabela";
function App(){
  const data = [{id:1, nome: 'elany', usuario:'elany1', email: 'elany@gmail.com'},{id:2, nome: 'john', usuario:'john1', email: 'john@gmail.com'},{id:3, nome: 'aladdim', usuario:'aladdim1', email: 'aladdin@gmail.com'}, ]
  return ( 
    <>
      <div id="app">
        <Apresentacao></Apresentacao>
        <Button tipo='primary'>Primary</Button>
        <Button tipo='danger'>Primary</Button>
        <Button disabled >Primary</Button>
        
       </div>
       <div id= 'tabela'>
       <Tabela data={data}></Tabela>
       </div>
    </>
  )
}
export default App;
