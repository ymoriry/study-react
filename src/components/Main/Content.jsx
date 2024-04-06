import { Inter } from "next/font/google";
import styles from "@/src/components/Main/Content.module.css";
import { Links } from "@/src/components/Links/Links";
import { Headline } from "@/src/components/Headline/Headline";

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