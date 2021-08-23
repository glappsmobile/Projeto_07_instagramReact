import IonIcon from '../IonIcon';
import Avatar from '../Avatar'

const PostHeader = (props) => {
    return (
        <div class="post-header">
            <div class="user-info">
                <Avatar name={props.name} size="small" />
                <strong>{props.name}</strong>
            </div>
            <IonIcon name="ellipsis-horizontal" title="Opções" />
        </div>
    )
}

export default PostHeader;