import { useAppSelector } from "@/app/appStore";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { NewsFilters } from "@/widgets/news";
import styles from "./styles.module.css";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";
import NewsListWithPagination from "../NewsListWithPagination";

const NewsByFilters = () => {
    const { filters } = useAppSelector((state) => state.news);

    const debouncedKeywords = useDebounce(filters.keywords, 1500);

    const { data, isLoading } = useGetNewsQuery({
        ...filters,
        keywords: debouncedKeywords,
    });
    const { data: dataCategories } = useGetCategoriesQuery();

    return (
        <section className={styles.section}>
            <NewsFilters
                filters={filters}
                categories={dataCategories?.categories || []}
            />
            <NewsListWithPagination
                isLoading={isLoading}
                filters={filters}
                news={data?.news || []}
            />
        </section>
    );
};

export default NewsByFilters;
