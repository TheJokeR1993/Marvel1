import { useDispatch } from "react-redux";
import Pagination from "@mui/material/Pagination";
import styles from "./paginations.module.css";
import { FormControl, MenuItem, Select } from "@mui/material";
import { useMediaQuery } from "react-responsive";

const Paginations = ({ total, state, changePage, changeLimit }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const dispatch = useDispatch();
  const actionChangePage = (_, page) => {
    const offset = page * state.limit - state.limit;
    dispatch(changePage({ page, offset }));
  };
  return (
    <div className={styles.pagination}>
      <Pagination
        size={isMobile ? "small" : ""}
        onChange={actionChangePage}
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
