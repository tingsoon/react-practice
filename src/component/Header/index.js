import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Box,
  Divider,
} from "@material-ui/core";

import useStyles from "./styles";

export function Header() {
  const styles = useStyles();
  //   const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <AppBar position="fixed" className={styles.appBar}>
        <Toolbar disableGutters={true}>
          <Container disableGutters={true} maxWidth={false} style={{ display: "block" }}>
            <Box className={styles.boxStyle}>
              <Typography variant="h6" className={styles.title}>
                Properties
              </Typography>
            </Box>
            <Divider variant="fullWidth" />
            <Box className={styles.boxStyle}>
              <Typography variant="h6" className={styles.title}>
                Filter
              </Typography>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <div className={styles.offset} />
    </Box>
  );
}

export default Header;
