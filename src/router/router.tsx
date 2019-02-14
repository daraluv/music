import Home from '../pages';
import Explore from '../pages/Explore';
import Radio from '../pages/Explore/Radio';
import Recommend from '../pages/Explore/Recommend';


const routers = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/Explore',
    exact: true,
    component: Explore
  },
  {
    path: '/Explore/Recommend',
    exact: true,
    component: Recommend
  },
  

];

export default routers;