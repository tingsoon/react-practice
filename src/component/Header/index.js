import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  AppBar,
  IconButton,
  Toolbar,
  Box,
  Container,
  Drawer,
  Typography,
  Divider,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Button,
} from "@material-ui/core";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import FilterListIcon from "@material-ui/icons/FilterList";

import { Formik } from 'formik';

import { searchFilteredContent } from "../../services/searchResults/action";

import useStyles from "./styles";

const bedrooms = [
  {
    value: "None",
    label: -1,
  },
  {
    value: "Studio",
    label: 0,
  },
  {
    value: "1 Bedroom",
    label: 1,
  },
  {
    value: "2 Bedrooms",
    label: 2,
  },
  {
    value: "3 Bedrooms",
    label: 3,
  },
  {
    value: ">=4 Bedrooms",
    label: 4,
  },
];

export function Header() {
  const styles = useStyles();
  const dispatch = useDispatch();
  // const theme = useTheme();

  const [open, setOpen] = useState(false);
  // const [bedroom, setBedroom] = useState("");
  // const [minPrice, setMinPrice] = useState(0);
  // const [maxPrice, setMaxPrice] = useState(0);


  const validate = (values) => {
    let errors = {};
    const regex = /^[0-9]*$/;

    if (!regex.test(values.minAmount) && values.minAmount !== '') {
      errors.minAmount = "Please enter numeric numbers";
    }

    if (!regex.test(values.maxAmount) && values.maxAmount !== '') {
      errors.maxAmount = "Please enter numeric numbers";
    }

    if(values.minAmount > values.maxAmount && values.minAmount && values.maxAmount) {
      errors.minAmount = "Min amount cannot be more than max amount"
    }

    return errors;
  };

  const submitForm = (values) => {
    const min = Number(values.minAmount) === 0 ? '' : Number(values.minAmount);
    const max = Number(values.maxAmount) === 0 ? '' : Number(values.maxAmount);
    const type = values.bedroom === -1 ? '' : values.bedroom;

    dispatch(searchFilteredContent(type, min, max));
    handleDrawerClose();
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const handleChangeBedroom = (event) => {
  //   setBedroom(event.target.value);
  // };

  // const handleChangeMinAmount = (event) => {
  //   setMinPrice(event.target.value);
  // };

  // console log filter options
  // useEffect(() => {
  //   console.log("bedroom", bedroom);
  // }, [bedroom]);

  const drawer = (
    <Container>
      <Formik
        initialValues={{ minAmount: '', maxAmount: '', bedroom: ''}}
        validate={validate}
        onSubmit={submitForm}
      >
        {(formik) => {
          const {
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            handleBlur,
            isValid,
            dirty,
          } = formik;
          return (
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                select
                id="bedroomFilter"
                label="Filter Number of Bedrooms"
                name="bedroom"
                // value={bedroom}
                value={values.bedroom}
                // onChange={handleChangeBedroom}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
              >
                {bedrooms.map((option) => (
                  <MenuItem key={option.label} value={option.label}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
              <br />
              <br />
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">
                  Min Bedroom Price
                </InputLabel>
                <OutlinedInput
                  id="minAmount"
                  value={values.minAmount}
                  name="minAmount"
                  // onChange={handleChangeMinAmount}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  labelWidth={150}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.minAmount && touched.minAmount && (
                  <span style={{color: 'red'}}>{errors.minAmount}</span>
                )}
              </FormControl>
              <br />
              <br />
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">
                  Max Bedroom Price
                </InputLabel>
                <OutlinedInput
                  id="maxAmount"
                  value={values.maxAmount}
                  name="maxAmount"
                  // onChange={handleChangeMinAmount}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  labelWidth={150}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.maxAmount && touched.maxAmount && (
                  <span style={{color: 'red'}}>{errors.maxAmount}</span>
                )}
              </FormControl>
              <br />
              <br />
              <Button type="submit" disabled={!isValid}>
                Submit
              </Button>
              <br />
              <br />
            </form>
          );
        }}
      </Formik>
    </Container>
  );

  return (
    <Box>
      <AppBar position="fixed" className={styles.appBar}>
        <Toolbar disableGutters={true}>
          <Container
            disableGutters={true}
            maxWidth={false}
            style={{ display: "block" }}
          >
            <Box className={styles.boxStyle}>
              <Typography variant="h6" className={styles.title}>
                Properties
              </Typography>
            </Box>
            <Divider variant="fullWidth" />
            <Box className={styles.boxStyle} onClick={handleDrawerOpen}>
              <Typography variant="h6" className={styles.title}>
                <FilterListIcon /> Filter
              </Typography>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <Drawer
        className={styles.drawer}
        variant="persistent"
        anchor="top"
        open={open}
        classes={{
          paper: styles.drawerPaper,
        }}
      >
        <div className={styles.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <KeyboardArrowUpIcon />
          </IconButton>
        </div>
        {drawer}
      </Drawer>
      <div className={styles.offset} />
    </Box>
  );
}

export default Header;
