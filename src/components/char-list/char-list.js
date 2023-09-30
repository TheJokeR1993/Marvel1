import { useDispatch } from "react-redux";
import styles from "./char-list.module.css";
import { changeActiveCharacter } from "../../features/characters";
import { useMemo } from "react";
import Skeleton from "react-loading-skeleton";

const CharList = ({ data, isFetching, active }) => {
  const dispatch = useDispatch();
  const memoCharList = useMemo(() => {
    return data.map((el, index) => {
      return (
        <div
          className={
            active
              ? el.id === active.id
                ? styles.active
                : styles.char
              : !index
              ? styles.active
              : styles.char
          }
          key={el.id}
          onClick={() => dispatch(changeActiveCharacter(el))}
        >
          <img alt={el.name} src={el.img} />

          <h2>{el.name}</h2>
        </div>
      );
    });
  }, [data, active]);
  return (
    <div className={styles.card}>
      <div className={styles.card_char}>
        {isFetching
          ? data.map((el) => (
              <Skeleton
                key={el.name}
                variant="rectangular"
                width={200}
                height={300}
              />
            ))
          : memoCharList}
      </div>
    </div>
  );
};
export default CharList;
