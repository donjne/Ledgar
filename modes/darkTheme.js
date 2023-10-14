// darkTheme.js
import { createTheme } from "@material-ui/core/styles";

const darkTheme = createTheme({
  palette: {
    type: "dark",
    background: {
      default: "hsl(210, 20%, 10%)",
    },
  },
});

export default darkTheme;
