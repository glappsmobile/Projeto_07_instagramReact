import Header from './Header';
import Buttons from './Buttons';
import Comments from './Comments';
import Status from './Status';
import Input from './Input';


const Video = () => {
    return (
        <div class="container-video padding-none">
            <video class="video-post border-main border-none-b" id="video" muted autoplay loop>
                <source src="videos/video.mp4" type="video/mp4" />
                <source src="videos/video.ogv" type="video/ogv" />
                Seu navegador não suporta esse tipo de vídeo.
            </video>
        </div>
    )
}

const Image = (props) => {
    return (
        <img
            class="img-post"
            src={`images/posts/${props.content}`}
            alt={`Post de ${props.name}`}
        />
    )
}


const Post = (props) => {

    const isImage = props.type === 'image';

    return (
        <li class="post border-main">
            <Header name={props.name} />
            {isImage && (
            <Image name={props.name} content={props.content}/>
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