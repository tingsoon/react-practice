import React from "react";

import useStyles from "./styles";
import { Typography } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../../component/Header";
import SearchResults from "../../component/SearchResults";

function Main() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <CssBaseline />
      <Header />
      <SearchResults />
    </div>
  );
}

export default Main;
