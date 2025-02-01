import withSkeleton from "../../helpers/hocs/withSkeleton";
import { INews } from "../../interfaces";
import NewsBanner from "../NewsBanner";
import styles from "./styles.module.css";

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
