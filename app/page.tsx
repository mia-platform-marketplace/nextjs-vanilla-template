import styles from "./page.module.css";


export default async function Home() {

  const homePage = [];

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
