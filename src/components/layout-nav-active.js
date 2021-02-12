import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './layout-nav-active.module.scss'

export default function LayoutNavActive ({ href, children }) {

    const router = useRouter ()
    const activeClass = router.pathname === href ? styles.active : null

    return (
        <Link href={href}>
            <a className={activeClass}>
                {children}
            </a>
        </Link>
    )

}

