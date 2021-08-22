const Suggestion = (props) => {
    return (
        <li class="suggestion">
            <div>
                <img 
                    src={`images/profile/${props.name}.png`} 
                    class="img-small" 
                    alt={`Imagem de ${props.name}`}
                />
                <div class="status">
                    <strong>{props.name}</strong>
                    <span>Segue você</span>
                </div>
            </div>
            <span class="follow fake-pointer"> Seguir </span>
        </li>
    );
};

export default Suggestion;