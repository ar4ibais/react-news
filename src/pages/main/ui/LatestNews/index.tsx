import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import { BannersList } from "@/widgets/news/ui";
import styles from "./styles.module.css";

const LatestNews = () => {
    const { data, isLoading } = useGetLatestNewsQuery();

    return (
        <section className={styles.section}>
            <BannersList banners={data?.news} isLoading={isLoading} />
        </section>
    );
};

export default LatestNews;
