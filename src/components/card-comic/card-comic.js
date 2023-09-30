import { useLocation, useNavigate, useParams } from "react-router-dom";
import ComicsBanner from "../comics-banner/comics-banner";
import styles from "./card-comic.module.css";
import { useGetOneComicQuery } from "../../services/comicsApi";
import { Fragment } from "react";
import ErrorApi from "../errorApi/errorApi";
import Loading from "../loading/loading";
const CardComic = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { data, isLoading, error } = useGetOneComicQuery(
    { id },
    { skip: location.state }
  );
  const comic = location.state ? location.state : data;

  if (isLoading) return <Loading />;
  if (error) return <ErrorApi />;

  return (
    <>
      <ComicsBanner />
      <div className={styles.comics_block}>
        <img alt={comic.name} src={comic.img} />
        <div className={styles.info_block}>
          <h2>{comic.title}</h2>
          <p>{comic.description}</p>
          <p>{comic.pageCount} pages</p>
          <dl>
            {comic.creators.map((el, index) => (
              <Fragment key={index}>
                <dt className={styles.dl_dt} key={index}>
                  {el.role} :
                </dt>
                <dd>{el.name}</dd>
              </Fragment>
            ))}
          </dl>
          <h3>{comic.prices ? comic.prices + "$" : "NOT AVAILABLE"}</h3>
          {comic.characters.length ? (
            <div>
              <h2>characters :</h2>
              {comic.characters.map((el) => (
                <p
                  onClick={() => navigate(`/charaster/${el.id}`)}
                  key={el.id}
                  className={styles.character}
                >
                  {el.name}
                </p>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
export default CardComic;
