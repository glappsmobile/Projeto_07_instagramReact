import Header from './Header';
import Buttons from './Buttons';
import Comments from './Comments';
import Status from './Status';
import Input from './Input';
import IonIcon from '../IonIcon';
import React from 'react';

class Video extends React.Component {
    handleClick = (caller) => {
        const parent = caller.target.parentElement;
        const video = parent.querySelector("video");
        const button = parent.querySelector("ion-icon");
        
        if (video.paused) {
            video.play();
            button.setAttribute("name", "pause");
        } else {
            video.pause();
            button.setAttribute("name", "play");
        }
    }

    render() {
        return (
            <div class="container-video">
                <IonIcon name="play" action={this.handleClick} />
                <video class="video-post border-main" loop>
                    <source src={`videos/${this.props.content}.mp4`} type="video/mp4" />
                    <source src={`videos/${this.props.content}.ogv`} type="video/ogv" />
                    Seu navegador não suporta esse tipo de vídeo.
                </video>
            </div>
        )
    }
}

const Image = (props) => {
    return (
        <img
            class="img-post"
            src={`images/posts/${props.content}.jpg`}
            alt={`Post de ${props.name}`}
        />
    )
}

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