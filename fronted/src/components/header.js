import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';

const Header=()=>(
      <div className="Header">
	<div className="Header-main">
	  <div className="Header-logo"><a href=""><img src="../images/chongqu.png" /></a></div>
	  <div className="Header-nav">
	    <ul>
	      <li><a href="/">首页</a></li>
		<li><a href="/markets">宠物市场</a></li>
		<li><Link to="/comments">宠物圈</Link></li>
		<li><Link to="/explore">探索</Link></li>
	    </ul>
	  </div>
	  <div className="Header-right">
	    <div className="Header-right-user">
	      <Link className="btn btn-default" to="/login">登陆</Link>
	    </div>
	  </div>
	</div>
      </div>
    );

export default Header;
