import Home from '../pages/Home';
import Account from '../pages/Account';
import Explore from '../pages/Explore';
import Friends from '../pages/Friends';
import Radio from '../pages/Explore/Radio';
import Recommend from '../pages/Explore/Recommend';



const routers = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  // {
  //   path: '/Account',
  //   exact: true,
  //   component: Account
  // },
  // {
  //   path: '/Explore',
  //   exact: false,
  //   component: Explore
  // },
  // {
  //   path: '/Friends',
  //   exact: true,
  //   component: Friends
  // },
  // {
  //   path: '/Explore/Radio',
  //   exact: false,
  //   component: Radio
  // },
  // {
  //   path: '/Explore/Recommend',
  //   exact: false,
  //   component: Recommend
  // },
  

];

export default routers;