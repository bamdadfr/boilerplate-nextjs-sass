import Head from 'next/head'
import AnimationFade from '@/components/animation-fade'
import LayoutNavActive from '@/components/layout-nav-active'

export default function Index () {

    return (
        <>
            <Head>
                <title>
                    index
                </title>
            </Head>
            <AnimationFade>
                <h1>
                    title
                </h1>
                <p>
                    paragraph
                    <p>
                        <LayoutNavActive href="/">
                            testtt
                        </LayoutNavActive>
                    </p>
                </p>
            </AnimationFade>
        </>
    )

}