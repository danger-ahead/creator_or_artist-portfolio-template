import React from "react";
import "./pages-style.css";
import { useDatabase } from "../contexts/DataBaseContext";
import { Box, Grid } from "@mui/material";

export default function Home() {
  const { imageUrlList, loadingImages } = useDatabase();

  if (loadingImages) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {window.innerWidth > 820 ? (
        <Box style={{margin: "10px 0"}} sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {imageUrlList.map((item, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <div style={{height: "500px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                  <a key={index} target="_blank" href={item} rel="noreferrer">
                    <img
                      style={{ borderRadius: "2px", marginBottom: "10px" }}
                      alt={item}
                      src={item}
                      width="350px"
                      height="auto"
                    />
                  </a>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {imageUrlList.map((item, index) => (
            <a key={index} target="_blank" href={item} rel="noreferrer">
              <img
                style={{ borderRadius: "2px", marginBottom: "10px" }}
                alt={item}
                src={item}
                width="350"
                height="auto"
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
