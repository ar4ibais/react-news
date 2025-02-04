import styles from "./styles.module.css";
import NewsByFilters from "./NewsByFilters";
import LatestNews from "./LatestNews";

const Main = () => {
    return (
        <main className={styles.main}>
            <LatestNews />
            <NewsByFilters />
        </main>
    );
};

export default Main;
