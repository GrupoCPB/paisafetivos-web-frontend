import { Container } from "@mui/material";
import React from "react";
import { Donate } from "style/donate";
import { ButtonDonation } from "./styled";

export function SectionDonation() {
  return (
    <div style={{ backgroundColor: "#ff40a7" }}>
      <Container sx={{ padding: { xs: "0", md: "block" } }}>
        <Donate>
          <div className="mobile-background">
            <section>
              <div className="donate-left">
                <h1>
                  Conectando <br />
                  pessoas
                  <br /> maravilhosas
                </h1>
                <p>
                  Atuamos desde 2009 acolhendo pessoas LGBTQ+ que são vítimas de
                  violência. Nos ajude a transformar a vida dessas pessoas.
                </p>

                <ButtonDonation
                  variant="contained"
                  color="secondary"
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  Faça sua doação
                </ButtonDonation>

                <ButtonDonation
                  variant="contained"
                  color="secondary"
                  sx={{ display: { xs: "block", md: "none" } }}
                >
                  Doação
                </ButtonDonation>
              </div>
              <div className="donate-right">
                <div className="background"></div>
              </div>
            </section>
          </div>
        </Donate>
      </Container>
    </div>
  );
}