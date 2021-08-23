import Header from './Header';
import Buttons from './Buttons';
import Comments from './Comments';
import Status from './Status';
import Input from './Input';
import Video from './Video';
import Image from './Image';

const Post = (props) => {
    return (
        <li class="post border-main">
            <Header name={props.name} />
            {(props.type === 'image') ? (
                <Image name={props.name} content={props.content} />
            ) : (
                <Video name={props.name} content={props.content} />
            )}
            <Buttons />
            <Status likeCount={props.likeCount} mainLike={props.mainLike} />
            <Comments
                comments={props.comments}
                author={props.name}
                authorComment={props.authorComment}
                commentCount={props.commentCount}
            />
            <div class="date">
                <span class="fake-pointer"> {props.date} </span>
            </div>
            <Input />
        </li>
    )
}

export default Post;