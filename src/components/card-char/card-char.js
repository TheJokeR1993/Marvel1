import { useLocation, useNavigate, useParams } from "react-router-dom";
import ComicsBanner from "../comics-banner/comics-banner";
import styles from "./card-char.module.css";
import { useGetCharQuery } from "../../services/charastersApi";
import ErrorApi from "../error-api/error-api";
import Loading from "../loading/loading";
const CardChar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { data, isLoading, error } = useGetCharQuery(
    { id },
    { skip: location.state }
  );
  const char = location.state ? location.state : data;
  if (isLoading) return <Loading />;
  if (error) return <ErrorApi />;
  return (
    <>
      <ComicsBanner />
      <div className={styles.card}>
        <img src={char.img} alt={char.name} />

        <div className={styles.card_info}>
          <h1>{char.name}</h1>
          <p className={styles.description}>{char.description}</p>
          {char.comics.length !== 0 && (
            <div>
              <h2>Comics :</h2>
              {char.comics.map((el) => (
                <p
                  key={el.id}
                  onClick={() => navigate(`/comics/${el.id}`)}
                  className={styles.comics}
                >
                  {el.name}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default CardChar;
