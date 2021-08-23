const Icon = (props) => {
    return (
        <ion-button title={props.title} onClick={props.action}>
            <ion-icon name={props.name} />
        </ion-button>
    )
}

export default Icon;