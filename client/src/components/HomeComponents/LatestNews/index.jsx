import React from 'react'
import "./index.scss"
import NewsCard from '../../CardNews'
const LatestNews = () => {
  return (
    <section id='news'>
        <div className="container">
        <div className="intro">
  <p>Popular Item in the market</p>
  <h2>
  Latest<span>News</span>
  </h2>
</div>
<div className="news-cards row">
<NewsCard/>
<NewsCard/>
<NewsCard/>
</div>
        </div>
    </section>
  )
}

export default LatestNews