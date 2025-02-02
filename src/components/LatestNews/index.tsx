import BannersList from "../BannersList";
import styles from "./styles.module.css";
import { useGetLatestNewsQuery } from "../../store/services/newsApi";

const LatestNews = () => {
    const { data, isLoading } = useGetLatestNewsQuery();

    return (
        <section className={styles.section}>
            <BannersList banners={data?.news} isLoading={isLoading} />
        </section>
    );
};

export default LatestNews;
