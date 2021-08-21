import Posts from './Posts';
import Stories from './Stories';
import SideBar from './SideBar';

const Main = () => {
    const user = {id: 'driven', name: 'Driven'};
    const suggestions = ['electricpants', 'modestmouse', 'spacetoday1', 'respondeai', 'theavettbrothers'];
    return (
        <div class="content">
            <div class="container-main wmo100">
                <Stories />
                <Posts />
            </div>
            <SideBar user={user} suggestions={suggestions}/>
        </div>
    );
};

export default Main;
