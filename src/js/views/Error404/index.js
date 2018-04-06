import React from "react";

import Container from "components/Container";
import ErrorContainer from "components/ErrorContainer";

import no from "images/no.gif";

const Error404 = () => (
  <Container>
    <ErrorContainer>
      <div className="flex justify-center flex-col items-center">
        <h1>Error 404 <span role="img" aria-label="Disappointed Face">😞</span></h1>
        <img src={no} alt="The Office no gif" className="mt-4 rounded-2" />
      </div>
    </ErrorContainer>
  </Container>
);

export default Error404;