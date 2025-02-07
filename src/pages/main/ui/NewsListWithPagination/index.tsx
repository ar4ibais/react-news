import { TOTAL_PAGES } from "@/shared/constants";
import { NewsList } from "@/widgets/news";
import { Pagination } from "@/features/pagination";
import { IFilters } from "@/shared/interfaces";
import { INews } from "@/entities/news";
import { usePaginationNews } from "../../utils/hooks/usePaginationNews";

interface Props {
    filters: IFilters;
    news: INews[];
    isLoading: boolean;
}

const NewsListWithPagination = ({ filters, news, isLoading }: Props) => {
    const { handleNextPage, handlePreviousPage, handlePageClick } =
        usePaginationNews(filters);

    return (
        <Pagination
            top
            bottom
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
            handlePageClick={handlePageClick}
            totalPages={TOTAL_PAGES}
            currentPage={filters.page_number}
        >
            <NewsList
                type="item"
                direction="column"
                isLoading={isLoading}
                news={news}
            />
        </Pagination>
    );
};

export default NewsListWithPagination;
