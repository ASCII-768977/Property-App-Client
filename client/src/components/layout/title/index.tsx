import { TitleProps, useRouterContext } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
import React from "react";

import { logo, hive } from "assets/index";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={logo} alt="Hive" width="28px" />
        ) : (
          <img src={hive} alt="Refine" width="140px" />
        )}
      </Link>
    </Button>
  );
};
