import { isValidUrl } from "../../helpers/isValidUrl";
import styles from "./styles.module.css";

interface Props {
    image: string;
}

const Image = ({ image }: Props) => {
    return (
        <div className={styles.wrapper}>
            {image && isValidUrl(image) ? (
                <img src={image} alt="news" className={styles.image} />
            ) : null}
        </div>
    );
};

export default Image;
