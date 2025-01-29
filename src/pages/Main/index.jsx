import { useEffect, useState } from "react";
import NewsBanner from "../../components/NewsBanner";
import styles from "./styles.module.css";
import { getNews } from "../../api/apiNews";
import NewsList from "../../components/NewsList";
import Skeleton from "../../components/Skeleton";


const Main = () => {
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true)
        const response = await getNews()
        setNews(response.news)
        console.log(news[0]);
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      }
    }
    fetchNews()
  }, [])
  return (
    <main className={styles.main}>
        {news.length > 0 && !isLoading ? <NewsBanner item={news[0]} /> : <Skeleton count={1} type="banner" />}
        {!isLoading ? <NewsList news={news.slice(1)} /> : <Skeleton count={10} type="item" />}
    </main>
  )
}

export default Main