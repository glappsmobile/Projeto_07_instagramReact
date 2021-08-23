import React from 'react';
import IonIcon from '../IonIcon';

class Video extends React.Component {

    handleClick = (caller) => {
        const container = caller.target.parentElement;
        const video = container.querySelector("video");
        const button = container.querySelector("ion-icon");

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
                <video class="video-post border-main" loop autoPlay>
                    <source src={`videos/${this.props.content}.mp4`} type="video/mp4" />
                    <source src={`videos/${this.props.content}.ogv`} type="video/ogv" />
                    Seu navegador não suporta esse tipo de vídeo.
                </video>
            </div>
        )
    }
}

export default Video;