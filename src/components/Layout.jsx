import React, { Fragment } from "react";
import Header from "./Header";
import { Container } from "react-bootstrap";

const Layout = ({children}) => {
  return (
    <Fragment>
      <Header />
      <Container style={{ marginTop: "2rem" }}>{children}</Container>
    </Fragment>
  );
};
export default Layout;
