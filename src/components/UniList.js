import React, { useState } from "react";
import useTable from "./useTable";
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import sizes from "./sizes";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    width: "90%",
    margin: theme.spacing(5),
    padding: theme.spacing(3),
    [sizes.down("md")]: {
      width: "80%",
    },
    [sizes.down("md")]: {
      width: "90%",
      margin: theme.spacing(1),
      padding: theme.spacing(1),
    },
  },
  searchInput: {
    width: "75%",
    [sizes.down("md")]: {
      width: "100%",
    },
  },
  newButton: {
    position: "absolute",
    right: "10px",
  },
  
  tableCell: {
    [sizes.down("sm")]: {
      fontSize: "8px",
      textWrap: "wrap",
    },
  },
}));

const headCells = [
  { id: "universityName", label: "University Name" },
  { id: "webAddress", label: "Website Address " },
];

const UniList = (props) => {
  const classes = useStyles();
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const { data } = props;

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(data, headCells, filterFn);

  const handleSearch = (e) => {
    const {value} = e.target;
    setFilterFn({
      fn: (items) => {
        if (!value.trim()) return items;
        else
          return items.filter((x) =>
            x.name.toLowerCase().includes(value)
          );
      },
    });
  };
  return (
    <Paper className={classes.pageContent}>
      <Toolbar>
        <TextField
          variant="outlined"
          className={classes.searchInput}
          label="Search Universities"
          name="search"
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Toolbar>
      <TblContainer>
        <TblHead />
        <TableBody>
          {recordsAfterPagingAndSorting().map((item, index) => (
            <TableRow key={index}>
              <TableCell className={classes.tableCell}>{item.name}</TableCell>
              <TableCell className={classes.tableCell}>
                {" "}
                <a href={item.web_pages[0]}>{item.web_pages[0]} </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TblContainer>
      <TblPagination  />
    </Paper>
  );
};

export default UniList;
