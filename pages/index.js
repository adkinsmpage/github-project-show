import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useState} from "react";

export default function Home() {
    let [repos, setRepos] = useState([])
  fetch('https://api.github.com/users/adkinsm2020/repos')
      .then(res => res.json())
      .then(res => {
          setRepos(res)
          console.log(repos)
          console.log(fetch)
      })
  return (
    <div className={styles.container}>
      <Head>
        <title>Adkinsm's GitHub</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/adkinsm2020">Adkinsm's GitHub!</a>
        </h1>

        <p className={styles.description}>
          Adkinsm 的 GitHub 展示
        </p>

        <div className={styles.grid}>
          {
            repos.map((repo, index) => {
                if (!repo.fork) {
                    return(
                        <a style={{ background: repo.archived?"yellow":"#fff"}} key={index} href={repo.html_url} className={styles.card}>
                            <h2>{repo.name} &rarr;</h2>
                            <p>{repo.description}</p>
                            <p>Stars <code>{repo.stargazers_count}</code></p>
                        </a>
                    )
                }
            })
          }
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}Adkinsm
        </a>
      </footer>
    </div>
  )
}
