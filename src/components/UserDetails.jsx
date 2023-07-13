const UserDetails = ({nome, idade, profissao}) => {
  return (
    <>
        <h2>Datalhes do usuario</h2>
        <ul>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
            <li>Profissão: {profissao}</li>
        </ul>
        {idade>=18 ?<p>Pode tirar a habilitação</p>:<p>NÃO pode tirar a habilitação</p>}
    </>
  )
}

export default UserDetails