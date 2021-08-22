import Header from './Header';
import Buttons from './Buttons';
import Comments from './Comments';
import Status from './Status';
import Input from './Input';

const Post = (props) => {
    return (
        <li class="container-post border-main">
            <Header name={props.name} />
            <img class="img-post" src={`images/posts/${props.postPic}`} alt={`Post de ${props.name}`} />
            <Buttons />
            <Status likeCount={props.likeCount} mainLike={props.mainLike} />
            <Comments comments={props.comments} author={props.name} authorComment={props.authorComment} commentCount={props.commentCount} />
            <span class="date fake-pointer"> {props.date} </span>
            <Input />
        </li>
    )
}

export default Post;