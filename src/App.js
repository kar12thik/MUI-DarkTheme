import React, { useState } from "react";
import { Grid, Paper, Typography, Button, Switch } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const darkTheme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    }
  });
  const greenTheme = createMuiTheme({
    palette: {
      primary: green,
      secondary: green
    }
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : greenTheme}>
      <Paper style={{ height: "100vh" }}>
        <Grid container direction="column">
          <Typography variant="h1">This is my App</Typography>
          <Button color="primary" variant="contained">
            Button One
          </Button>
          <Button color="secondary" variant="contained">
            Button Two
          </Button>
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
