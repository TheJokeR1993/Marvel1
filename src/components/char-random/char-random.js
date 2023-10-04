import styles from "./char-random.module.css";
import shield from "../images/shield.svg";
import mjolnir from "../images/mjolnir.svg";
import { useGetCharQuery } from "../../services/charastersApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useMediaQuery } from "react-responsive";

const CharRandom = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const [id, setId] = useState(() => randomChar());
  const { data, isFetching } = useGetCharQuery({ id });
  const navigate = useNavigate();
  const goToCardChar = (el) =>
    navigate(`/charaster/${el.id}`, {
      state: el,
    });
  // useEffect(() => {
  //   if (data) return;
  function randomChar() {
    const id = Math.floor(Math.random() * (1011400 - 1011000)) + 1011000;
    return id;
  }

  return (
    <div className={styles.random_char}>
      <div className={styles.info}>
        {isFetching ? (
          <Skeleton width={180} height={180} />
        ) : (
          <img alt="character" src={data?.img} />
        )}

        <div className={styles.info_block}>
          {isFetching ? (
            <Skeleton width={"90%"} height={30} marginBottom={20} />
          ) : (
            <h2>{data.name}</h2>
          )}

          {isFetching ? (
            <Skeleton width={"100%"} height={25} marginBottom={20} />
          ) : (
            <p className={styles.descr}>{data.description}</p>
          )}
          <div className={styles.btns}>
            {isFetching ? (
              <button disabled>homepage</button>
            ) : (
              <button onClick={() => goToCardChar(data)}>homepage</button>
            )}
            {isMobile && (
              <button onClick={() => setId(randomChar())}>RAndom</button>
            )}
          </div>
        </div>
      </div>

      <div className={styles.random}>
        <p>
          Random character for today!
          <br />
          Do you want to get to know him better?
        </p>
        <p>Or choose another one</p>
        <button onClick={() => setId(randomChar())}>try it</button>
        <img src={shield} alt="Random character" className={styles.shield} />
        <img src={mjolnir} alt="mjolnir" className={styles.mjolnir} />
      </div>
    </div>
  );
};

export default CharRandom;
