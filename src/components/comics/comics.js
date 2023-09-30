import Pagination from "../pagination/pagination";
import { useGetAllComicsQuery } from "../../services/comicsApi";
import styles from "./comics.module.css";
import { changeLimitComics, changePageComics } from "../../features/comics";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ComicsBanner from "../comics-banner/comics-banner";
import Loading from "../loading/loading";
import Skeleton from "react-loading-skeleton";
const Comics = () => {
  const navigate = useNavigate();
  const state = useSelector((state) => state.comics);
  const { data, isFetching, isLoading } = useGetAllComicsQuery({
    limit: state.limit,
    offset: state.offset,
  });

  const goToAbout = (el) => navigate(`/comics/${el.id}`, { state: el });
  if (isLoading) return <Loading />;

  return (
    <>
      <ComicsBanner />

      <div className={styles.comics}>
        {data.results.map((el) =>
          isFetching ? (
            <div key={el.id}>
              <Skeleton height={346} />
              <Skeleton height={21} width={"75%"} />
              <Skeleton height={21} width={"50%"} />
            </div>
          ) : (
            <div key={el.id}>
              <img onClick={() => goToAbout(el)} alt={el.title} src={el.img} />
              <p className={styles.title}>{el.title}</p>
              <p className={styles.price}>
                {el.prices ? el.prices + "$" : "NOT AVAILABLE"}
              </p>
            </div>
          )
        )}
      </div>
      <div>
        <Pagination
          state={state}
          total={data.total}
          changePage={changePageComics}
          changeLimit={changeLimitComics}
        />
      </div>
    </>
  );
};
export default Comics;
