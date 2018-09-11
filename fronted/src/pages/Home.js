import React from 'react';
import './Home.css'

const Home= () =>(
  <div className="Main-content">
    <div className="Home-Banner">
      <img src="../images/banner01.jpg" />
    </div>
    <div className="Home-main">
      <div className="Home-comments container">
	<div className="Home-comments-menu">
	  <ul>
	    <li><a>热门</a></li>
	    <li><a>最新</a></li>
	  </ul>
	</div>
	<div className="Home-comments-content">
	  <div className="Home-comments-item">
	    <div className="avatar">
	      <img src="../images/avatar01.jpeg" />
	    </div>
	    <div className="right">
	      <div className="user">
		<a className="name">frank-亚特兰蒂斯</a>
		<div className="tools-tip">
		  更多
		</div>
	      </div>
	      <div className="blog">
		<div className="content">
		  <span>最近饭团有点调皮，昨天把家又拆了，然后你们懂得，被我狠狠揍了一顿，希望它引以为戒！最近饭团有点调皮，昨天把家又拆了，然后你们懂得，被我狠狠揍了一顿，希望它引以为戒！最近饭团有点调皮，昨天把家又拆了，然后你们懂得，被我狠狠揍了一顿，希望它引以为戒！最近饭团有点调皮，昨天把家又拆了，然后你们懂得，被我狠狠揍了一顿，希望它引以为戒！最近饭团有点调皮，昨天把家又拆了，然后你们懂得，被我狠狠揍了一顿，希望它引以为戒！最近饭团有点调皮，昨天把家又拆了，然后你们懂得，被我狠狠揍了一顿，希望它引以为戒！最近饭团有点调皮，昨天把家又拆了，然后你们懂得，被我狠狠揍了一顿，希望它引以为戒！最近饭团有点调皮，昨天把家又拆了，然后你们懂得，被我狠狠揍了一顿，希望它引以为戒！</span>
		</div>
		<div class="resource">
		  <img src="../images/banner01.jpg" />
		</div>
	      </div>
	      <div className="oper">
		
	      </div>
	      <div className="comment">
		
	      </div>
	    </div>
	  </div>
	</div>
      </div>
      <div className="Home-module">
	<div className="Home-left container">
	  <div className="container-header">
	    <a className="more">更多</a>
	    <h4>明星宠物</h4>
	  </div>
	  <PetStar />
	</div>
	<div className="Home-right container"></div>
      </div>
    </div>
  </div>
)

const PetStarApi={
  PetStars:[
    {PetName:"饭团",FansCount:666,Power:66,AvatarUrl:"../images/avatar01.jpeg",Des:"      大家好，我是一条拉布拉多犬，我的名字和我的食量很符合的哟！能吃能睡能拉就是我，拉不？拉多！哈哈哈"},
    {PetName:"饭团",FansCount:666,Power:66,AvatarUrl:"../images/avatar01.jpeg",Des:"      大家好，我是一条拉布拉多犬，我的名字和我的食量很符合的哟！能吃能睡能拉就是我，拉不？拉多！哈哈哈"},
    {PetName:"饭团",FansCount:666,Power:66,AvatarUrl:"../images/avatar01.jpeg",Des:"      大家好，我是一条拉布拉多犬，我的名字和我的食量很符合的哟！能吃能睡能拉就是我，拉不？拉多！哈哈哈"},
    {PetName:"饭团",FansCount:666,Power:66,AvatarUrl:"../images/avatar01.jpeg",Des:"      大家好，我是一条拉布拉多犬，我的名字和我的食量很符合的哟！能吃能睡能拉就是我，拉不？拉多！哈哈哈"},
    {PetName:"饭团",FansCount:666,Power:66,AvatarUrl:"../images/avatar01.jpeg",Des:"      大家好，我是一条拉布拉多犬，我的名字和我的食量很符合的哟！能吃能睡能拉就是我，拉不？拉多！哈哈哈"},
  ],
  all:function(){return this.PetStars}
}

const PetStar=()=>(
  <div className="Pet-star container-content">
  {
    PetStarApi.all().map(p=>(
      <div className="container-content-list1">
	<div className="Pet-star-info">
	  <a className="Pet-star-avatar">
	    <img src={p.AvatarUrl} />
	  </a>
	  <div className="Pet-star-name">
	    <a className="Pet-name">饭团</a>
	    <span className="Pet-count">粉丝：6666</span>
	  </div>
	  <div className="Pet-star-level">
	    <span className="value">66</span>
	    <span className="name">吸粉值</span>
	  </div>
	</div>
	<div className="Pet-star-desc">
	  大家好，我是一条拉布拉多犬，我的名字和我的食量很符合的哟！能吃能睡能拉就是我，拉不？拉多！哈哈哈
	</div>
      </div>
    ))
  }
  </div>
)


export default Home
