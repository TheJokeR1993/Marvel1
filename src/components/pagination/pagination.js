import { useDispatch } from "react-redux";
import Pagination from "@mui/material/Pagination";
import styles from "./pagination.module.css";
import { FormControl, MenuItem, Select } from "@mui/material";
import { useMediaQuery } from "react-responsive";

const Paginations = ({ total, state, changePage, changeLimit }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const dispatch = useDispatch();
  const actionChangePage = (el) => {
    if (el.ariaLabel) {
      dispatch(changePage(+el.ariaLabel.split(" ")[3]));
    } else {
      el.dataset.testid === "NavigateNextIcon"
        ? dispatch(changePage(state.page + 1))
        : dispatch(changePage(state.page - 1));
    }
  };
  return (
    <div className={styles.pagination}>
      <Pagination
        size={isMobile ? "small" : ""}
        onChange={(e) => {
          actionChangePage(e.target);
        }}
        page={state.page}
        count={Math.round(total / state.limit)}
        color="secondary"
        boundaryCount={isMobile ? 1 : 2}
      />

      <FormControl>
        <Select
          sx={{ fontSize: 16, height: 35 }}
          color="secondary"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state.limit}
          onChange={(e) => dispatch(changeLimit(e.target.value))}
        >
          {state.paginationLimit.map((el) => (
            <MenuItem key={el} value={el}>
              {el}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Paginations;
