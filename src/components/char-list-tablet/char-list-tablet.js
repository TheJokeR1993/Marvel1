import styles from "./char-list-tablet.module.css";
import { useMemo } from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";

const CharListTablet = ({ data, isFetching }) => {
  const navigate = useNavigate();

  const memoCharList = useMemo(() => {
    return data.map((el, index) => {
      return (
        <div
          className={styles.char}
          key={el.id}
          onClick={() => navigate(`/charaster/${el.id}`)}
        >
          <img alt={el.name} src={el.img} />
          <h2>{el.name}</h2>
          <p>{el.description}</p>
        </div>
      );
    });
  }, [data]);
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
export default CharListTablet;
