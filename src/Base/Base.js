import React from 'react'

function Base({title, description, children}) {
  return (
    <div className='main-container'>
        <header>
            <nav>
                <div>
                    App Name
                </div>
                <div className='nav-btn-group'>
                    <button>btn 1</button>
                    <button>btn 1</button>
                    <button>btn 1</button>
                </div>
            </nav>
        </header>
        <main>
            <h1>{title}</h1>
            <h4>{description}</h4>
            <div className='container'>
                {children}
            </div>
        </main>
    </div>
  )
}

export default Base