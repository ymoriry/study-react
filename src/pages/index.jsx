import Head from "next/head";
import { Inter } from "next/font/google";
import { Content } from "@/src/components/Main/Content";
import { Header } from "@/src/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Content page='index'/>
    </>
  );
}
