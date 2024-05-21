import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const darkTheme = createMuiTheme({
  palette: { type: "dark" },
});

export default function CustomPagination({ setPage, numOfPages = 10 }) {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          onChange={(e) => handlePageChange(e.target.textContent)}
          count={numOfPages}
          color="primary"
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider>
    </div>
  );
}

// The standard Lorem Ipsum passage, used since the 1500s
// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
// incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
// exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
// dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
// Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
// anim id est laborum.

// The standard Lorem Ipsum passage, used since the 1500s
// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
// incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
// exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
// dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
// Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
// anim id est laborum.

// The standard Lorem Ipsum passage, used since the 1500s
// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
// incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
// exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
// dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
// Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
// anim id est laborum.
