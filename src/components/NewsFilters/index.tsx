import { IFilters } from "../../interfaces";
import { useAppDispatch } from "../../store";
import { useGetCategoriesQuery } from "../../store/services/newsApi";
import { setFilters } from "../../store/slices/newsSlice";
import Categories from "../Categories";
import Search from "../Search";
import Slider from "../Slider";
import styles from "./styles.module.css";

interface Props {
    filters: IFilters;
}

const NewsFilters = ({ filters }: Props) => {
    const dispatch = useAppDispatch();
    const { data: dataCategories } = useGetCategoriesQuery();

    return (
        <div className={styles.filters}>
            {dataCategories ? (
                <Slider>
                    <Categories
                        categories={dataCategories.categories}
                        selectedCategory={filters.category}
                        setSelectedCategory={(category) =>
                            dispatch(
                                setFilters({
                                    key: "category",
                                    value: category,
                                })
                            )
                        }
                    />
                </Slider>
            ) : null}

            <Search
                keywords={filters.keywords}
                setKeywords={(keywords) =>
                    dispatch(
                        setFilters({
                            key: "keywords",
                            value: keywords,
                        })
                    )
                }
            />
        </div>
    );
};

export default NewsFilters;
