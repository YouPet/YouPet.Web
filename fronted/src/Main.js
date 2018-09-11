import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import Markets from './pages/Markets'
import Comments from './pages/Comments'
import Explore from  './pages/Explore'

const Main = () => (
  <div className="Main">
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/markets' component={Markets} />
      <Route path='/comments' component={Comments} />
      <Route path='/explore' component={Explore} />
    </Switch>
  </div>
)

export default Main
