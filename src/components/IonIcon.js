const Icon = (props) => {
    return (
        <ion-button title={props.title}>
            <ion-icon name={props.name} />
        </ion-button>
    )
}

export default Icon;