import React from "react";
import { useGetIdentity, useOne } from "@pankod/refine-core";
import { Typography } from "@pankod/refine-mui";
import { Profile } from "components";

const MyProfile = () => {
  const { data: user } = useGetIdentity();
  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: user?.userid,
  });

  const myProfile = data?.data ?? [];

  if (isLoading) return <Typography>Loading...</Typography>;

  if (isError) return <Typography>Error</Typography>;

  return (
    <Profile
      type="My"
      name={myProfile.name}
      avatar={myProfile.avatar}
      email={myProfile.email}
      properties={myProfile.allProperties}
    />
  );
};

export default MyProfile;
