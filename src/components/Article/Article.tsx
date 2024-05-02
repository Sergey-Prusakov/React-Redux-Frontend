import { useState } from 'react'
import NewsImage from '../../assets/news.png'
import './Article.css'

function Article() {
  const [newsArray] = useState([
    {
      title: 'News 1 text',
      text: 'qwert fswer sffdfd sfbhfsgdfg xdf gdfggffggffg fgfgfgfg asdsdsd sdsdfdsdfsd sdffdfdfdf dfggfd dfgfgfddfgf',
      image: NewsImage
    },
    {
      title: 'News 2 text',
      text: 'qwert fswer sffdfd sfbhfsgdfg xdf gdfggffggffg fgfgfgfg asdsdsd sdsdfdsdfsd sdffdfdfdf dfggfd dfgfgfddfgf',
      image: NewsImage
    }
  ]);

  return (
    <>
      <article className='article_block'>
        <div className='article'>
          {
            newsArray.map((element, i) => (
              <div className='article_news_block' id={`element-${i}`}>
                <div className='article_news_info'>
                  <h1 className='article_news_info_title'>{element.title}</h1>
                  <span className='article_news_info_text'>{element.text}</span>
                </div>
                <div className='article_news_image_block'>
                  <img className='article_news_image' src={element.image} alt="" />
                </div>
              </div>
            ))
          }
        </div>
      </article>
    </>
  )
}

export default Article