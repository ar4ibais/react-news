import { IPaginationProps } from "../../model/types";
import PaginationButtons from "../PaginationButtons";

type Props = {
    top?: boolean;
    bottom?: boolean;
    children: React.ReactNode;
} & IPaginationProps;

const Pagination = ({ top, bottom, children, ...paginationProps }: Props) => {
    return (
        <>
            {top && <PaginationButtons {...paginationProps} />}
            {children}
            {bottom && <PaginationButtons {...paginationProps} />}
        </>
    );
};

export default Pagination;
