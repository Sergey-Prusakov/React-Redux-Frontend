import { useState } from 'react'
import './Header.css'

function Header() {
  const [auth] = useState(false);

  return (
    <>
      <header className='header_block'>
        <div className='header'>
            <span className='header-logo'>News Site</span>
          <div className='header_authorithation_block'>
            {
              auth ?
                <button className='header_authorithation_log-in_button header_button'>Войти</button>
                : <>
                  <img src="" alt="" />
                  <span className='header_authorithation_username'>Username</span>
                  <button className='header_button'>Профиль</button>
                  <button className='header_button'>Выйти</button>
                </>
            }
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
