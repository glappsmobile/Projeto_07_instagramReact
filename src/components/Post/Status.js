import numberWithDots from '../../helpers/numberWithDots';
import Avatar from '../Avatar';

const Status = (props) => {
    return (
        <div class="post-status">
            <Avatar name={props.mainLike} size="tiny" />
            <p> Curtido por <strong>{props.mainLike} </strong>e<strong> outras {numberWithDots(props.likeCount)} pessoas </strong> </p>
        </div>
    )
}

export default Status;