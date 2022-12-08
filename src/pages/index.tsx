import Head from "next/head";
import Image from "next/image";
import ImagesPage from "./images";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Amazing research platform of Rick and Morty characters."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello world</h1>
        <a href={`/images`}>Redirect</a>
      </main>
    </div>
  );
}
