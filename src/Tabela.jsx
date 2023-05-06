function Tabela (props) {
    return(
        <table>
            <thead>
                <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>USUÁRIO</th>
                <th>E-MAIL</th>
                </tr>
            </thead>   
            <tbody>
                {props.data.map(props => (
          <tr key={props.id}>
            <td>{props.id}</td>
            <td>{props.nome}</td>
            <td>{props.usuario}</td>
            <td>{props.email}</td>
          </tr>
        ))}

            </tbody>    
        </table>
    )
}
export default Tabela;