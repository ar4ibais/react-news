import { TOTAL_PAGES } from "../../constants";
import styles from "./styles.module.css";
import NewsList from "../NewsList";
import NewsFilters from "../NewsFilters";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import PaginationWrapper from "../PaginationWrapper";
import { useGetNewsQuery } from "../../store/services/newsApi";
import { useAppDispatch, useAppSelector } from "../../store";
import { setFilters } from "../../store/slices/newsSlice";

const NewsByFilters = () => {
    const dispatch = useAppDispatch();
    const { filters } = useAppSelector((state) => state.news);

    const debouncedKeywords = useDebounce(filters.keywords, 1500);

    const { data, isLoading } = useGetNewsQuery({
        ...filters,
        keywords: debouncedKeywords,
    });

    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGES) {
            dispatch(
                setFilters({
                    key: "page_number",
                    value: filters.page_number + 1,
                })
            );
        }
    };

    const handlePreviousPage = () => {
        if (filters.page_number > 1) {
            dispatch(
                setFilters({
                    key: "page_number",
                    value: filters.page_number - 1,
                })
            );
        }
    };

    const handlePageClick = (pageNumber: number) => {
        dispatch(
            setFilters({
                key: "page_number",
                value: pageNumber,
            })
        );
    };

    return (
        <section className={styles.section}>
            <NewsFilters filters={filters} />
            <PaginationWrapper
                top
                bottom
                handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage}
                handlePageClick={handlePageClick}
                totalPages={TOTAL_PAGES}
                currentPage={filters.page_number}
            >
                <NewsList isLoading={isLoading} news={data?.news} />
            </PaginationWrapper>
        </section>
    );
};

export default NewsByFilters;
