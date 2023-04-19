import { useLogin } from "@pankod/refine-core";
import { Box, Container } from "@pankod/refine-mui";
import { useEffect, useRef } from "react";

import { hive } from "../assets/index";

import { CredentialResponse } from "../interfaces/google";

export const Login: React.FC = () => {
  const { mutate: login } = useLogin<CredentialResponse>();

  const GoogleButton = (): JSX.Element => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (typeof window === "undefined" || !window.google || !divRef.current) {
        return;
      }

      try {
        window.google.accounts.id.initialize({
          ux_mode: "popup",
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          callback: async (res: CredentialResponse) => {
            if (res.credential) {
              login(res);
            }
          },
        });
        window.google.accounts.id.renderButton(divRef.current, {
          theme: "filled_blue",
          size: "medium",
          type: "standard",
        });
      } catch (error) {
        console.log(error);
      }
    }, []); // you can also add your client id as dependency here

    return <div ref={divRef} />;
  };

  return (
    <Box component="div" sx={{ backgroundColor: "#FCFCFC" }}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <img src={hive} alt="Hive Logo" style={{ width: "18rem" }} />
          </div>
          <Box mt={4}>
            <GoogleButton />
          </Box>
        </Box>
        <h4>User Guide</h4>
        <p>
          Since the backend is deploy to a free cloud and it's bit slow, if you
          can not see the button of login then try to refresh the page and wait
          for few seconds.
        </p>
        <p>
          After login, you can see the main dashboard with different graphs.
        </p>
        <p>
          For the property details page, you can add, update, delete properties.
        </p>
        <p>
          Feel free to contact me if you have any problem or find bugs.
          <a href="mailto:forrest.lin.work@gmail.com" style={{ color: "blue" }}>
            forrest.lin.work@gmail.com
          </a>{" "}
        </p>
      </Container>
    </Box>
  );
};
