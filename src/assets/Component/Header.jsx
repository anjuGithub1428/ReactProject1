import './HeaderCss.css'

const Header = () => {
  return (
    <header className="header">
      <h1 className='center'>React Project</h1>
      <nav className='right-align'>
        <ul>
          <li><a href="#">HTML</a></li>
          <li><a href="#">PYTHON</a></li>
          <li><a href="#">JAVA</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header