
const PostHeader = (props) => {
    return (
        <div class="container-post-top">
            <div class="row flex-items-center">
                <img className="img-small" src={`images/profile/${props.name}.png`} alt={`Miniatura de ${props.name}`}/>
                <span class="txt-black bold margin-m-l">{props.name}</span>
            </div>
            <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
    )
}

const PostButtons = () => {
    return (
        <div class="container-post-buttons">
            <div class="container-margin-s-r">
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
    )
}

const PostStatus = (props) => {
    return (
        <div class="container-post-status">
            <img class="img-profile-mini" src={`images/profile/${props.mainLike}.png`} alt={`Miniatura de ${props.mainLike}`}/>
            <p> Curtido por <en>{props.mainLike}</en> e <en>outras {props.likeCount} pessoas</en></p>
        </div>
    )
}

const PostInput = () => {
    return (
        <div class="container-push-comment">
            <img src="images/icons/emoji.png" alt=""/>
            <input class="input-comment" placeholder="Adicione um comentário..."/>
            <span class="btn-publish">Publicar</span>
        </div>
    )
}

const Comment = (props) => {
    return (
        <div class="flex space-between">
            <p> <span class="txt-black bold">{props.name}</span> {props.text}</p> 
            <img src="images/icons/heart-outline.png" class="icon-micro" alt=""/>
        </div>
    )
}

const Comments = (props) => {
    const commentList = props.comments.map(comment => <Comment name={comment.name} text={comment.text} />);

    return (
      <div class="container-post-comments">
        <p> <span class="txt-black bold">{props.author}</span> {props.authorComment}</p>
        <span class="txt-gray"> Ver todos os {props.commentCount} comentários</span>
        {commentList}
    </div>
    
    )
}

const Post = (props) => {
    
    return (
        <li class="container-post border-main">
            <PostHeader name={props.post.name} />
            <img class="img-post" src={`images/posts/${props.post.postPic}`} alt={`Post de ${props.post.name}`}/>
            <PostButtons />
            <PostStatus likeCount={props.post.likeCount} mainLike={props.post.mainLike} />
            <Comments comments={props.post.comments} author={props.post.name} authorComment={props.post.authorComment} commentCount={props.post.commentCount}/>
            <span class="date"> {props.post.date} </span>
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

    const postsList = posts.map((post) =>
        <Post post={post} />
    )

    return (
        <ul class="container-posts">
            {postsList}
        </ul>
    )
}

export default Posts;