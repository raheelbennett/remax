import Link from 'next/link'

const Header = () => {
  return (
    <div>
            <header className="flex justify-between">
        <h1><Link href="/">remax</Link></h1>
        <nav>
          <ul className="flex justify-between">
            <li>Login</li>
            <li>About</li>
            <li>Register</li>
            <li>Home</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header