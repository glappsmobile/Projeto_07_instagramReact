import numberWithDots from '../../helpers/numberWithDots';

const Status = (props) => {
    return (
        <div class="post-status">
            <img
                class="img-profile-mini"
                src={`images/profile/${props.mainLike}.png`}
                alt={`Miniatura de ${props.mainLike}`}
            />
            <p> Curtido por <strong>{props.mainLike} </strong>e<strong> outras {numberWithDots(props.likeCount)} pessoas </strong> </p>
        </div>
    )
}

export default Status;