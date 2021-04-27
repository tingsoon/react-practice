import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";

// import request from "../../utils/request";
// import { Config } from "../../config";

import {
  Container,
  Typography,
  CircularProgress,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
} from "@material-ui/core";
import { searchContent } from "../../services/searchResults/action";

function SearchResults() {
  const styles = useStyles();
  const dispatch = useDispatch();

  // redux store logic
  const data = useSelector((state) => state.searchResults);

  // const baseUrl = Config.AUTH_API_URL;

  // test retrieve api && it works..
  // useEffect(() => {
  //   // Run! Like go get some data from an API.
  //   request(baseUrl, {
  //     method: "GET",
  //     url: "/test",
  //     // data: {},
  //   })
  //     // .then(handleResponse)
  //     .then((response) => {
  //       console.log(response);
  //     });
  // }, []);

  // test dispatch action
  useEffect(() => {
    dispatch(searchContent());
  }, []);

  return (
    <main className={styles.content}>
      <div className={styles.toolbar}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Container>
          <Typography variant="h3">Search Properties</Typography>
          <br />
          {/* Display loading */}
          {data.isLoading && (
            <div>
              <Typography>
                Loading... <CircularProgress />
              </Typography>
            </div>
          )}

          <Typography style={{ color: "gray" }} variant="h5">
            {data.totalProperties} properties found
          </Typography>
          <br />
          <br />
          <Container>
            {data.list.map((x, id) => {
              return (
                <Card
                  className={styles.rootCard}
                  classes={{
                    root: styles.card,
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      className={styles.media}
                      image={x.imageurl}
                      title={x.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {x.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {x.description}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Price:{" "}
                        {x.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                          maximumFractionDigits: 0,
                        })}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
            })}
          </Container>
        </Container>
      </div>
    </main>
  );
}

export default SearchResults;
