import MediaQuery from 'react-responsive'
import Posts from './Post/List';
import Stories from './Stories';
import SideBar from './SideBar/';

const Main = () => {
    const user = {id: 'driven', name: 'Driven'};
    const suggestions = ['electricpants', 'modestmouse', 'spacetoday1', 'respondeai', 'theavettbrothers'];
    return (
        <div class="content">
            <div class="container-main wmo100">
                <Stories />
                <Posts />
            </div>
            <MediaQuery minWidth={935}>
                <SideBar user={user} suggestions={suggestions}/>
            </MediaQuery>
        </div>
    );
};

export default Main;
