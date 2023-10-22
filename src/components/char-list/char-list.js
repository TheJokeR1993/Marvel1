import { useDispatch } from "react-redux";
import styles from "./char-list.module.css";
import { changeActiveCharacter } from "../../features/characters";
import { useMediaQuery } from "react-responsive";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";

const CharList = ({ data, isFetching, active }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isTablet = useMediaQuery({
    query: "(max-width: 1100px)",
  });

  return (
    <div className={styles.card}>
      <div className={styles.card_char}>
        {data.map((el) => {
          return (
            <div
              className={
                !isTablet && el.id === active.id ? styles.active : styles.char
              }
              key={el.id}
              onClick={() =>
                isTablet
                  ? navigate(`/charaster/${el.id}`)
                  : dispatch(changeActiveCharacter(el))
              }
            >
              {isFetching ? (
                <Skeleton
                  key={el.name}
                  variant="rectangular"
                  width={200}
                  height={310}
                />
              ) : (
                <>
                  <img alt={el.name} src={el.img} />
                  <h2>{el.name}</h2>
                  <p className={styles.description}>{el.description}</p>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CharList;
