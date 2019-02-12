import Explore from '../pages/Explore';
import Radio from '../pages/Explore/Radio';
import Recommend from '../pages/Explore/Recommend';


const routers = [
  {
    path: '/',
    exact: true,
    component: Explore
  },
  {
    path: '/Explore/Radio',
    exact: true,
    component: Radio
  },
  {
    path: '/Explore/Recommend',
    exact: true,
    component: Recommend
  },
  

];

export default routers;