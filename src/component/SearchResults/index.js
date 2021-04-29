import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";

import {
  Container,
  Typography,
  CircularProgress,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
} from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";

import { searchOffsetContent } from "../../services/searchResults/action";

function SearchResults() {
  const styles = useStyles();
  const dispatch = useDispatch();

  // redux store logic
  const data = useSelector((state) => state.searchResults);

  // test dispatch action for infinite loading
  useEffect(() => {
    dispatch(
      searchOffsetContent(
        data.type,
        data.min,
        data.max,
        data.limit,
        data.offset
      )
    );
  }, []);

  // fetch more data using infinite loading
  const fetchMoreData = () => {
    setTimeout(() => {
      dispatch(
        searchOffsetContent(
          data.type,
          data.min,
          data.max,
          data.limit,
          data.offset
        )
      );
    }, 2000);
  };

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
            <Typography>
              Loading... <CircularProgress />
            </Typography>
          )}
          {!data.isLoading && (
            <Typography style={{ color: "gray" }} variant="h5">
              {data.totalProperties} properties found
            </Typography>
          )}
          <br />
          <br />
          <Container>
            <InfiniteScroll
              dataLength={data.list.length}
              next={fetchMoreData}
              hasMore={data.hasMore}
              loader={
                <h3 style={{ textAlign: "center" }}>
                  <b>Loading more properties...</b>
                </h3>
              }
              endMessage={
                <h3 style={{ textAlign: "center" }}>
                  <b>No More Results.</b>
                </h3>
              }
            >
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
                          component="h6"
                        >
                          {x.description}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="textPrimary"
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
            </InfiniteScroll>
          </Container>
        </Container>
      </div>
    </main>
  );
}

export default SearchResults;
