function Button (props){
    const classes = `btn ${props.tipo || "default"}`;
    return <button disebled= {props.disebled}className= {classes}>{props.children}</button>
}

export default Button;