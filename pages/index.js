import Head from 'next/head'
import Link from 'next/link'

const Home = (props) => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
        <ul>
            <li>
                <Link href="/post?id=first">
                    <a>My first blog post</a>
                </Link>
            </li>
            <li>
                <Link href="/post?id=second">
                    <a>My second blog post</a>
                </Link>
            </li>
            <li>
                <Link href="/post?id=last">
                    <a>My last blog post</a>
                </Link>
            </li>
        </ul>
    </main>
  </div>
)

export default Home
