import Head from 'next/head'
import Link from 'next/link'

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
        <ul>
            <li>
                <a href="/post/best" target="_blank">This work on a Vercel deploy but not with 'vercel dev'</a>
            </li>
        </ul>
    </main>
  </div>
)

export default Home
