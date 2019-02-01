import Explore from '../pages/Explore';
import Radio from '../pages/Explore/Radio';

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

];

export default routers;