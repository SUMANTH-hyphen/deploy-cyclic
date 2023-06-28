import React from "react";
import { Container, Grid, Card, CardContent, Box, Button, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const ProfileEditPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Card sx={{ maxWidth: "650px", margin: "0 auto", height: "fit-content" }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item md={6}>
                <h2>Profile Edit</h2>
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <TextField
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        label="Phone Number"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item>
                      <Stack direction="row" spacing={3}>
                        <Button sx={{ marginLeft: "15%" }} variant="contained" color="primary" type="submit">
                          Save
                        </Button>
                        <Button variant="contained" color="secondary">
                          Reset
                        </Button>
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item md={6} sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="User Profile"
                  style={{ width: "100%", borderRadius: "8px" }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default ProfileEditPage;
