import { useState } from 'react'
import './Aside.css'

function Aside() {
  const [tagsArray] = useState([{
    name: 'qwert'
  },
  {
    name: 'zxcvbn'
  },
  {
    name: 'zxcvbn'
  },
  {
    name: 'zxcvbn'
  },
  {
    name: 'zxcvbn'
  },
  {
    name: 'zxcvbn'
  },
  {
    name: 'zxcvbn'
  },
  {
    name: 'zxcvbn'
  },
  {
    name: 'zxcvbn'
  },
  {
    name: 'zxcvbn'
  },
  ]);

  return (
    <>
      <aside className='aside_block'>
        <div className='aside'>
          <h3>Тэги</h3>
        {
          tagsArray.map((element, i) => (
          <span className='aside_tag' id={`tag-${i}`}>{element.name}</span>
        ))
        }
        </div>
      </aside>
    </>
  )
}

export default Aside