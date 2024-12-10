import Head from "next/head";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import dynamic from "next/dynamic";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// const RemoteComponent = dynamic(() => import("remote-app/button"), {
//   ssr: false,
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
// }) as any;

const MyRemoteComponent = dynamic(() => import("microfront/OrderModule"), {
  ssr: false,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const MyRemoteComponent = dynamic(() => import("microfront/OrderModule").then((mod) => mod.MyComponent)) as any;

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
        <main className={styles.main}>
          Hola mundo desde host-app
          <MyRemoteComponent />
        </main>
      </div>
    </>
  );
}
