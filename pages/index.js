import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>index.js title</title>
      </Head>

      <main>
        <Link href="/sample">
          <a>About Page</a>
        </Link>
      </main>
    </div>
  )
}