import { Inter } from "next/font/google";
import styles from "./Content.module.css";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";

const inter = Inter({ subsets: ["latin"] });

export function Content(props) {
  return (
      <main className={`${styles.main} ${inter.className}`}>
        <Headline
          page={props.page}
        >
          <p>
            {props.page} Page
          </p>
        </Headline>
        <Links />
      </main>
  );
}