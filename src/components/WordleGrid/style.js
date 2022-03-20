import { green, yellow } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    "&&": {
      borderRadius: "50%",
      fontSize: "17px",
      padding: "20px",
      backgroundColor: "#928b7d",
      color: "#fff",
      paddingTop: "15px",
      paddingBottom: "15px",
    },
  },
  grey: {
    "&&": {
      background: "#060505",
    },
  },
  green: {
    "&&": {
      background: "#33eb91",
    },
  },
  yellow: {
    "&&": {
      background: "#d47944",
    },
  },
});
