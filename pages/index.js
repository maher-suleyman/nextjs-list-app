import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>

      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          pariatur, consectetur, quo sint fugiat asperiores quas non dignissimos
          cumque, nostrum velit molestiae laboriosam quidem veniam sit. Esse
          nostrum quos dolorem?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          pariatur, consectetur, quo sint fugiat asperiores quas non dignissimos
          cumque, nostrum velit molestiae laboriosam quidem veniam sit. Esse
          nostrum quos dolorem?
        </p>
        <Link href="/ninjas" className={styles.btn}>
          See Ninja Listing
        </Link>
      </div>
    </>
  );
}
