import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Product from "../components/Product";
import Footer from "../components/Footer";

const cards = [1, 2, 3];

const theme = createTheme();

export default function Home() {
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>
        <Container sx={{ py: 6 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Product />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer/>
    </ThemeProvider>
  );
}
