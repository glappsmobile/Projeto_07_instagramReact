import Avatar from "./Avatar";

const Storie = (props) => {
    return (
        <li class="story">
            <Avatar name={props.name} size="storie" />
            <span href="#" class="txt-username-storie">{props.name}</span>
        </li>
    )
}

const Stories = () => {
    const lastStories = ['respondeai', 'driven', 'modestmouse', 'theavettbrothers', 'thepunchbrothers', 'spacetoday1', 'electricpants', 'thelumineers'];
    const storiesList = lastStories.map(name => <Storie name={name} />);
    
    return (
        <div class="container-stories border-main">
            <ul class="stories">{storiesList}</ul>
            <ion-button class="desktop">
                <ion-icon name="chevron-forward-circle" />
            </ion-button>
        </div>
    )
}

export default Stories;