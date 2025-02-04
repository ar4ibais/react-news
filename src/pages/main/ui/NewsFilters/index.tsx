import { useAppDispatch } from "@/app/appStore";
import Search from "@/features/search/ui/Search";
import Slider from "@/features/slider/ui/Slider";
import { IFilters } from "@/shared/interfaces";
import styles from "./styles.module.css";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";
import { setFilters } from "@/entities/news/model/newsSlice";
import { Categories } from "@/features/categories";

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
