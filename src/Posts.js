import logo from './images/icons/logo-img.png';
import logoText from './images/icons/logo-text.png';

const Post = () => {
    return (
        <div class="container-post border-main">
            <div class="container-post-top">
                <div class="row flex-items-center">
                    <img src="images/profile/modestmouse.png" class="img-small"/>
                    <a class="txt-black bold margin-m-l">modestmouse</a>
                </div>
                <img src="images/icons/dots.png" class="icon"/>
            </div>
            <img class="img-post" src="images/posts/skate.jpg"/>
            <div class="container-post-buttons">
                <div class="container-margin-s-r">
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                <img class="icon" src="images/icons/ticket.png"/>
            </div>
            </div>
            <div class="container-post-status">
                <img class="img-profile-mini" src="images/profile/electricpants.png"/>
                <p> Curtido por <en>electricpants</en> e <en>outras 250.523 pessoas</en></p>
            </div>
            <div class="container-post-comments">
                <p> <a class="txt-black bold">modestmouse</a> The Golden Casket Rider</p>
                <a href="#" class="txt-gray"> Ver todos os 3.987 comentários</a>
                <div class="flex space-between"><p> <a class="txt-black bold">glauco</a> show</p> <img src="images/icons/heart-outline.png" class="icon-micro"/></div>
                <div class="flex space-between"><p> <a class="txt-black bold">username-not-found-skatista</a> quero um 😍😍</p> <img src="images/icons/heart-outline.png" class="icon-micro"/></div>
                <a href="#" class="txt-gray fsss margin-ss-t"> 4 DE JULHO </a>
            </div>
            <div class="container-push-comment">
                <img src="images/icons/emoji.png"/>
                <input class="input-comment" placeholder="Adicione um comentário..."/>
                <a href="#"class="btn-publish">Publicar</a>
            </div>
        </div>

    )

}

const Posts = () => {
    return (
        <div class="container-posts">
            <Post />
        </div>
    )
}

export default Posts;