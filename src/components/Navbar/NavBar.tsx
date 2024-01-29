import Link from 'next/link'
import styles from './NavBar.module.css'
import Logout from '../logout/Logout'
import DarkModeToggle from '../ToggleMode/ToggleMode'

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/'
  },
  {
    id: 2,
    title: 'blog',
    url: '/blog'
  },
  {
    id: 3,
    title: 'Contact',
    url: '/contact'
  },
  {
    id: 4,
    title: 'Dashboard',
    url: '/dashboard'
  }
]

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href={'/'}><h1>BLOG AUTH</h1></Link>

        <div className={styles.links}>
          <DarkModeToggle/>
          {links.map((link) => (
            <Link key={link.id} href={link.url}>
              {link.title}
            </Link>
          ))}

          <Logout/>
        </div>
      </div>
    </nav>
  )
}
