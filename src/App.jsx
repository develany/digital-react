const saudacao = () => <p>Olá</p>
const apresentacao = () => <h1> Sou Elany, Desenvolvedora Fullstack.</h1>
const descricao = () => <p>Estudante de Fullsatck, e aqui você encontra meus principais projetos.</p>

function App(){
  return <div id= 'saudacao'>{saudacao()}{apresentacao()}{descricao()}</div>
}
export default App;
