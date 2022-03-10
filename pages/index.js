import Head from 'next/head'
import Navbar from "../components/Navbar"

 

export default function Home() {
  return (
    <>

      <Head>
          <title>Manage Landing Page</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar/>

        <div>
          <p className='text-3xl font-bold underline'>Hello World</p>

        </div>

        


    </>
  )
}
