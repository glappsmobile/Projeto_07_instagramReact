import IonIcon from '../IonIcon';
import numberWithDots from '../../helpers/numberWithDots';

const Comment = (props) => {
    return (
        <div class="comment">
            <p> <strong>{props.name}</strong> {props.text} </p>
            <IonIcon name="heart-outline" title="Curtir" />
        </div>
    )
}

const Comments = (props) => {
    const commentList = props.comments.map(comment => <Comment name={comment.name} text={comment.text} />);
    return (
        <div class="post-comments">
            {(props.authorComment) && <p> <strong>{props.author}</strong> {props.authorComment} </p>}
            <span class="txt-gray fit fake-pointer"> Ver todos os {numberWithDots(props.commentCount)} comentários </span>
            <ul class="comments">{commentList}</ul>
        </div>
    )
}

export default Comments;