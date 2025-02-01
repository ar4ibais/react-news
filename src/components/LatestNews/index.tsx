import { getLatestNews } from "../../api/apiNews";
import BannersList from "../BannersList";
import styles from "./styles.module.css";
import { useFetch } from "../../helpers/hooks/useFetch";
import { NewsApiResponse } from "../../interfaces";

const LatestNews = () => {
    const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);
    return (
        <section className={styles.section}>
            <BannersList banners={data?.news} isLoading={isLoading} />
        </section>
    );
};

export default LatestNews;
