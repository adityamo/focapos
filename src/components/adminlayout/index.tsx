"use client";
import React, { useEffect, useState } from "react";
import HeaderAdmin from "./header";
import Sidebar from "./sidebar";
import Breadcrumb from "./breadcrumb";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { api } from "@/utils/api";
import { decryptID } from "@/helpers/EncryptHelper";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setUser } from "@/store/reducers/UserDataSlice";

interface Props {
  children: React.ReactNode;
}

const AdminPageLayout = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { status, data: session }: any = useSession();
  const { user } = useSelector((state: RootState) => state.User);
  const router = useRouter();
  const dispatch = useDispatch();

  const { refetch } = api.auth.getUserInfo.useQuery(
    { id: decryptID(session?.user?.id) },
    { enabled: false }
  );

  const fetchUserInfo = async () => {
    if (status === "authenticated" && session?.user?.id) {
      try {
        const res = await refetch();
        if (res.status === "success") {
          dispatch(setUser(res.data));
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    } else if (status === "unauthenticated") {
      router.push("/auth/signin"); // Redirect to sign-in if not authenticated
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, [status]);

  return (
    <div className="flex">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        user={user}
      />
      <div className="relative flex flex-1 flex-col lg:ml-72.5">
        <HeaderAdmin
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <main className="dark:bg-boxdark-2 bg-[#EEF2FF] dark:text-bodydark h-screen">
          <div className="mx-auto  max-w-screen-2xl p-4 md:p-6 2xl:py-8  2xl:px-10 ">
            <Breadcrumb />
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPageLayout;
