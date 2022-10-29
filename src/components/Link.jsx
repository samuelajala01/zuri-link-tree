const Link = (props) => {
    return (
        <a href={props.href}>
            <button id={props.id}>{props.name}</button>
        </a>
    )
}

export default Link