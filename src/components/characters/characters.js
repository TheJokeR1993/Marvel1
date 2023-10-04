import styles from "./characters.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllCharQuery } from "../../services/charastersApi";
import Paginations from "../pagination/pagination";
import {
  changeActiveCharacter,
  changePageCharacter,
} from "../../features/characters";
import { changeLimitCharacter } from "../../features/characters";

import Loading from "../loading/loading";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import CharList from "../char-list/char-list";
import CharInfo from "../char-info/char-info";
import CharRandom from "../char-random/char-random";
import { useMediaQuery } from "react-responsive";
import CharListTablet from "../char-list-tablet/char-list-tablet";
import "react-loading-skeleton/dist/skeleton.css";

const Characters = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.charasters);
  const { data, isLoading, isFetching } = useGetAllCharQuery({
    limit: state.limit,
    offset: state.offset,
  });
  const isTablet = useMediaQuery({
    query: "(max-width: 1100px)",
  });
  useEffect(() => {
    if (isLoading) return;
    if (state.active) return;
    dispatch(changeActiveCharacter(data.results[0]));
  }, [isLoading]);
  if (isLoading) return <Loading />;
  //  char={!active ? data.data.results[0] : active}
  return (
    <div className={styles.charasters}>
      <CharRandom />
      <div className={styles.char_list}>
        {isTablet ? (
          <CharListTablet data={data.results} isFetching={isFetching} />
        ) : (
          <>
            <CharList
              active={state.active}
              data={data.results}
              isFetching={isFetching}
            />
            {state.active && <CharInfo data={state.active} />}
          </>
        )}
      </div>
      <div>
        <div>
          <Skeleton height={29} borderRadius={8} width={280} />
        </div>
      </div>
      <div className={styles.paginations}>
        <Paginations
          total={data.total}
          state={state}
          changePage={changePageCharacter}
          changeLimit={changeLimitCharacter}
        />
      </div>
    </div>
  );
};
export default Characters;
