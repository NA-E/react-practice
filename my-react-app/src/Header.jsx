import logo from "/workspaces/react-practice/my-react-app/src/logo.svg"

export default function Header() {
    return (
        <header className='header'>
            <img src={logo} className="nav-logo" alt="React logo" />
            <nav>
              <ul className='nav-list'>
                <li className='nav-list-item'>Pricing</li>
                <li className='nav-list-item'>About</li>
                <li className='nav-list-item'>Contact</li>
              </ul>
            </nav>
        </header>
    )
  }
  