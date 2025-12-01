import styles from "./page.module.css";
import { fetchCrudCollection } from "@/lib/api";

export default async function Home() {

  const homePage = await fetchCrudCollection({endpoint: 'starter-config'})

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>
          {homePage && homePage[0]?.title ? homePage[0]?.title : 'Hello World!'}
        </h1>
      </main>
    </div>
  );
}
