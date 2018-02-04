import React from "react";
import Grid from "material-ui/Grid";
import TextField from "material-ui/TextField";
import Paper from "material-ui/Paper";
import Button from "material-ui/Button";
import Navbar from "./Navbar";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { success: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = event => {
    event.preventDefault();
    let uname = event.target.uname.value;
    let pwd = event.target.pwd.value;
    if (uname !== "" && pwd !== "") {
      fetch('/cred', {
        method: "POST",
        headers: "application/JSON",
        body: JSON.stringify({
            uname: uname,
            password: pwd
        })
      })
        .then(res => {
            console.log(`${res}`);
        })
        .catch(err => {
            console.log(`${err}`);
        });
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <Grid
          container
          alignItems="center"
          justify="center"
          spacing={0}
          style={{ height: "90vh" }}
        >
          <Grid item xs={10} sm={8} md={6} lg={4} xl={3}>
            <Paper style={{ paddingBottom: "2em", paddingTop: "1em" }}>
              <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                <Grid
                  container
                  alignItems="center"
                  justify="center"
                  spacing={0}
                >
                  <Grid item xs={10}>
                    <TextField
                      label="Username"
                      name="uname"
                      margin="normal"
                      placeholder="example@gmail.com"
                      fullWidth
                      required
                      autoFocus
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  justify="center"
                  spacing={0}
                >
                  <Grid item xs={10}>
                    <TextField
                      label="Password"
                      name="pwd"
                      margin="normal"
                      placeholder="Enter Password"
                      fullWidth
                      required
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  justify="center"
                  spacing={0}
                >
                  <Grid item>
                    <Button
                      raised
                      type="submit"
                      color="primary"
                      style={{ marginTop: "1em" }}
                    >
                      SUBMIT
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
