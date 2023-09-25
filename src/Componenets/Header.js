import React from 'react'

const Header = () => {
  return (
    <div>
        <header className='topnav'>
            <nav className='navbar navbar-expand-md navbar-dark'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#'>
                        <img className='nav_logo ' src='https://www.freepnglogos.com/uploads/netflix-logo-0.png'/>
                    </a>
                <div>
                    <div className='navbar'>
                    <form className='d-flex ' role='search'> 
                        <select>
                            <option>English</option>
                            <option>Hindi</option>
                        </select>
                        <button className='btn btn-danger'> Signin</button>
                    </form>
                    </div>
                </div>

                </div>
            </nav>
        </header>
    </div>
  )
}

export default Header