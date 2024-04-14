import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  // const styles = (theme) => {
  // ({
  root: {
    "& .MuiTextField-root": {
      // margin: theme.spacing(1),
      margin: "5px 10px",
    },
  },
  paper: {
    // padding: theme.spacing(2),
    padding: "10px 10px",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
    // marginTop: 10,
  },
}));

// export default styles;
