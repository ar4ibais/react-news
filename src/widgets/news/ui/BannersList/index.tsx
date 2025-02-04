import withSkeleton from "@/shared/hocs/withSkeleton";
import styles from "./styles.module.css";
import { INews, NewsBanner } from "@/entities/news";

interface Props {
    banners?: INews[];
}

const BannersList = ({ banners }: Props) => {
    return (
        <ul className={styles.banners}>
            {banners?.map((banner) => (
                <NewsBanner key={banner.id} item={banner} />
            ))}
        </ul>
    );
};

const BannersListWithSkeleton = withSkeleton(BannersList, "banner", 10, "row");

export default BannersListWithSkeleton;
