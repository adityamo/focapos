import React from "react";
import ProfileModule from "@/modules/profile/ProfileModule";
import { api } from "@/utils/server";
import { notFound } from "next/navigation";

const ProfilePage = async () => {
  const detailUser = await api.profile.getDetailProfile.query();

  if (!detailUser) {
    return notFound();
  }

  return <ProfileModule accountInfo={detailUser?.data} />;
};

export default ProfilePage;
