import styles from "./char-info.module.css";
import { useNavigate } from "react-router-dom";

const CharInfo = ({ data }) => {
  const navigate = useNavigate();
  if (!data) return;
  return (
    <div className={styles.char}>
      <div className={styles.char_info}>
        <div className={styles.char_img}>
          <img src={data.img} alt="char-img" />
        </div>

        <div className={styles.char_name}>
          <h2>{data.name}</h2>

          <button
            onClick={() => navigate(`/charaster/${data.id}`, { state: data })}
          >
            Homepage
          </button>
        </div>
      </div>
      <div className={styles.char_comics}>
        <p className={styles.description}>{data.description}</p>
        <div className={styles.comics_all}>
          <h3>Comics:</h3>
          {Array.isArray(data.comics) ? (
            data.comics.map((el) => (
              <p
                onClick={() => navigate(`/comics/${el.id}`)}
                className={styles.char_comics}
                key={el.id}
              >
                {el.name}
              </p>
            ))
          ) : (
            <h4>{data.comics}</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharInfo;
