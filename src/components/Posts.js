import numberWithDots from '../utils';
import IonIcon from './IonIcon';

const PostHeader = (props) => {
    return (
        <div class="post-header">
            <div class="user-info">
                <img 
                    className="img-small" 
                    src={`images/profile/${props.name}.png`} 
                    alt={`Miniatura de ${props.name}`}
                />
                <strong>{props.name}</strong>
            </div>
            <IonIcon name="ellipsis-horizontal" title="Opções" />
        </div>
    )
}

const PostButtons = () => {
    return (
        <div class="post-buttons">
            <div class="container-margin-s-r">
                <IonIcon name="heart-outline" title="Curtir" />
                <IonIcon name="chatbubble-outline" title="Comentar" />
                <IonIcon name="paper-plane-outline" title="Compartilhar" />
            </div>
            <IonIcon name="bookmark-outline" title="Favoritar" />
        </div>
    )
}

const PostStatus = (props) => {
    return (
        <div class="post-status">
            <img 
                class="img-profile-mini" 
                src={`images/profile/${props.mainLike}.png`} 
                alt={`Miniatura de ${props.mainLike}`}
            />
            <p> 
                Curtido por <strong>{props.mainLike} </strong>e<strong> outras {props.likeCount} pessoas </strong> 
            </p>
        </div>
    )
}

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
        <div class="container-post-comments">
            {(props.authorComment) && <p> <strong>{props.author}</strong> {props.authorComment} </p>}
            <span class="txt-gray"> Ver todos os {numberWithDots(props.commentCount)} comentários </span>
            <ul class="comments">{commentList}</ul>
        </div>
    )
}

const PostInput = () => {
    return (
        <div class="container-push-comment">
            <img src="images/icons/emoji.png" alt=""/>
            <input class="input-comment" placeholder="Adicione um comentário..."/>
            <span class="btn-publish fake-anchor">Publicar</span>
        </div>
    )
}

const Post = (props) => { 
    return (
        <li class="container-post border-main">
            <PostHeader name={props.post.name} />
            <img class="img-post" src={`images/posts/${props.post.postPic}`} alt={`Post de ${props.post.name}`}/>
            <PostButtons />
            <PostStatus likeCount={numberWithDots(props.post.likeCount)} mainLike={props.post.mainLike} />
            <Comments comments={props.post.comments} author={props.post.name} authorComment={props.post.authorComment} commentCount={numberWithDots(props.post.commentCount)}/>
            <span class="date fake-anchor"> {props.post.date} </span>
            <PostInput />
        </li>
    )
}

const Posts = () => {
    const posts =  [{
            name: "modestmouse",
            postPic: "skate.jpg",
            mainLike: "electricpants",
            date: "4 DE JULHO",
            likeCount: 250523,
            commentCount: 3987,
            authorComment: "The Golden Casket Rider",
            comments: [
                {name: "glauco", text: "show"},
                {name: "username-not-found-skatista", text: "quero um 😍😍"},
            ]
        },
        {
            name: "spacetoday1",
            postPic: "lua.jpg",
            mainLike: "respondeai",
            date: "3 DE MAIO",
            likeCount: 11235,
            commentCount: 185,
            authorComment: "Uma das regiões mais lindas da Lua, um local muito fotogênico, tanto para ser observado como para ser registrado.",
            comments: [
                {name: "oficialjon", text: "Espero em breve poder passear por aí 🙌"},
                {name: "g7.santos", text: "Ué gente, mas a terra não era plana"},
            ]
        },
        {
            name: "respondeai",
            postPic: "planta.jpg",
            mainLike: "theavettbrothers",
            date: "1 DIA ATRÁS",
            likeCount: 23785,
            commentCount: 43,
            authorComment: "Hahahaah",
            comments: [
                {name: "pessoa", text: "kkkkkkkkkkkkkk"},
                {name: "otako", text: "quero um 😍😍"},
            ]
        },
        {
            name: "modestmouse",
            postPic: "planta.jpg",
            mainLike: "spacetoday1",
            date: "HÁ 3 HORAS",
            likeCount: 4787,
            commentCount: 127,
            authorComment: "",
            comments: [
                {name: "kurrrrt", text: "Polar opposites don't push away, It's the same On the weekends as the rest of the days."},
                {name: "ambientcloud", text: "this new album is so insanely good. thank you guys 🙏"},
            ]
        },
    ]

    return (
        <ul class="container-posts">
            {posts.map((post) =><Post post={post} />)}
        </ul>
    )
}

export default Posts;