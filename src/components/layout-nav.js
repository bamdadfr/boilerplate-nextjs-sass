import LayoutNavActive from '@/components/layout-nav-active'

export default function LayoutNav () {

    return (
        <nav>
            <ul>
                <li>
                    <LayoutNavActive href="/">
                        /index
                    </LayoutNavActive>
                </li>
                <li>
                    <LayoutNavActive href="/404">
                        /404
                    </LayoutNavActive>
                </li>
            </ul>
        </nav>
    )

}
