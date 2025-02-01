import { IPaginationProps } from "../../interfaces";
import Pagination from "../Pagination";

type Props = {
    top?: boolean;
    bottom?: boolean;
    children: React.ReactNode;
} & IPaginationProps;

const PaginationWrapper = ({
    top,
    bottom,
    children,
    ...paginationProps
}: Props) => {
    return (
        <>
            {top && <Pagination {...paginationProps} />}
            {children}
            {bottom && <Pagination {...paginationProps} />}
        </>
    );
};

export default PaginationWrapper;
