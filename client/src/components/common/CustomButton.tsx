import React from "react";
import { Button } from "@pankod/refine-mui";
import { CustomButtonProps } from "interfaces/common";

const CustomButton = ({
  type,
  title,
  backgroundColor,
  color,
  fullWidth,
  icon,
  handleClick,
  disabled
}: CustomButtonProps) => {
  return (
    <Button
      type={type === "submit" ? "submit" : "button"}
      disabled={disabled}
      sx={{
        flex: fullWidth ? 1 : "unset",
        minWidth: 130,
        padding: "10px 15px",
        width: fullWidth ? "100%" : "fit-content",
        backgroundColor,
        color,
        fontSize: 16,
        fontWeight: 600,
        gap: "10px",
        textTransform: "capitalize",
        "&:hover": {
          opacity: 0.9,
          backgroundColor,
        },
        "&:disabled": {
          color: "#b1b1b1",
        }
      }}
      onClick={handleClick}
    >
      {icon}
      {title}
    </Button>
  );
};

export default CustomButton;
