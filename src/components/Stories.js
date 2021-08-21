const Storie = (props) => {
    return (
        <li class="container-storie">
            <img src={`images/profile/${props.name}.png`} class="img-storie" alt=""/>
            <span href="#" class="txt-username-storie">{props.name}</span>
        </li>
    )
}

const Stories = () => {
    const lastStories = ['respondeai', 'driven', 'modestmouse', 'theavettbrothers', 'thepunchbrothers', 'spacetoday1', 'electricpants', 'thelumineers'];
    const storiesList = lastStories.map(name => <Storie name={name} />);
    
    return (
        <div class="container-stories border-main">
            <ul>{storiesList}</ul>
            <ion-button class="desktop">
                <ion-icon name="chevron-forward-circle" />
            </ion-button>
        </div>
    )
}

export default Stories;