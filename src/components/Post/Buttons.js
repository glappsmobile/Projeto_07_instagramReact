import IonIcon from '../IonIcon';

const PostButtons = () => {
    return (
        <div class="post-buttons">
            <div>
                <IonIcon name="heart-outline" title="Curtir" />
                <IonIcon name="chatbubble-outline" title="Comentar" />
                <IonIcon name="paper-plane-outline" title="Compartilhar" />
            </div>
            <IonIcon name="bookmark-outline" title="Favoritar" />
        </div>
    )
}

export default PostButtons;