import Link from 'next/link'

const Header = () => {
  return (
    <header className='header'>
      <Link href='/'>
        <img src='' alt='logo' className='header-logo' />
      </Link>
      <Link href='/'>
        <h1 className='header-title'>Company name</h1>
      </Link>
      <a
        className='header-summary checkout'
        href='#'
        style={{ textDecoration: 'none' }}>
        <span className='total-price'>Price</span>
      </a>
    </header>
  )
}

export default Header
