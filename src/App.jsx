import Apresentacao from "./Apresentacao";
import Button from "./Button";
import "./Global.css"
function App(){
  return ( 
      <div id="app">
        <Apresentacao></Apresentacao>
        <Button tipo='primary'>Primary</Button>
        <Button tipo='danger'>Primary</Button>
        <Button disabled >Primary</Button>
       </div>
  )
}
export default App;
