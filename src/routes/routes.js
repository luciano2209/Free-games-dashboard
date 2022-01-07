//Layouts
import LayoutMain from '../layouts/LayoutMain'

//Pages
import Home from '../pages/Home'
import Pcgames from '../pages/Pcgames'
import Browsergames from '../pages/Browsergames'




const routes = [
  {
    path: "/",
    layout:LayoutMain,
    component: Home,
    exact: true
  },
  {
    path: "/pc",
    layout:LayoutMain,
    component: Pcgames,
    exact: true
  },
  {
    path: "/browser",
    layout:LayoutMain,
    component: Browsergames,
    exact: true
  },
  {
    layout:LayoutMain,
    component: Home
  }
]

export default routes