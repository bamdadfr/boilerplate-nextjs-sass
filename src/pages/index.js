import Head from 'next/head'
import AnimationFade from '@/components/animation-fade'

export default function PagesIndex () {

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
                </p>
            </AnimationFade>
        </>
    )

}