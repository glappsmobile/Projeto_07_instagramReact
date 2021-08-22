import Header from "./Header";
import Suggestion from "./Suggestion";
import Footer from "./Footer";

const SiderBar = (props) => {
    return (
        <aside class="bar-side">
            <Header user={props.user} />
            <div class="suggestions-labels">
                <span class="txt-gray"> Sugestões para você </span>
                <span class="fake-pointer"> Ver tudo </span>
            </div>
            <ul class="suggestions">
                {props.suggestions.map((suggestion) => <Suggestion name={suggestion} />)}
            </ul>
            <Footer />
        </aside>
    );
};

export default SiderBar;