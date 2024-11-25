"use client";
import React, { useState } from "react";
import { FiUser, FiBell, FiLock, FiUsers } from "react-icons/fi";
import { CiCreditCard1 } from "react-icons/ci";
import Account from "./Account";
import Notification from "./Notification";
import Security from "./Security";
import Billing from "./Billing";

interface Props {
  accountInfo: any;
}

const ProfileModule = ({ accountInfo }: Props) => {
  const [currentTab, setCurrentTab] = useState("STT001");
  console.log(accountInfo);

  const handleChangeTab = (tabId: string) => {
    setCurrentTab(tabId);
  };

  const tablist = [
    {
      sectionName: "Personal",
      isChild: true,
      child: [
        { childID: "STT001", name: "Akun", icon: FiUser },
        { childID: "STT002", name: "Notifikasi", icon: FiBell },
        { childID: "STT003", name: "Keamanan", icon: FiLock },
      ],
    },
    {
      sectionName: "Organisasi",
      isChild: true,
      child: [
        {
          childID: "STT004",
          name: "Pembayaran",
          icon: CiCreditCard1,
        },
        { childID: "STT005", name: "Tim", icon: FiUsers },
      ],
    },
  ];

  const displayContent = (id: string) => {
    switch (id) {
      case "STT001":
        return <Account user={accountInfo} />;
      case "STT002":
        return <Notification />;
      case "STT003":
        return <Security />;
      case "STT004":
        return <Billing />;
    }
  };

  return (
    <div className="max-w-full px-0 py-5 sm:px-6 lg:px-8 lg:py-5 mx-auto space-y-5">
      <div className="flex flex-row w-full">
        <h3 className="text-slate-700 text-lg lg:text-2xl font-semibold">
          Pengaturan Akun
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-3">
          <div className="bg-white shadow-sm rounded-md border border-gray-200">
            <div className="p-4">
              {tablist.map((section: any, key: React.Key) => {
                return (
                  <div key={key}>
                    <small className="text-sm text-gray-500 font-normal mb-5 ">
                      {section.sectionName}
                    </small>
                    <div className="flex flex-col py-2 lg:py-4">
                      {section.isChild &&
                        section.child.map((child: any, index: React.Key) => {
                          return (
                            <button
                              className={`inline-flex items-center ${currentTab === child.childID ? "text-indigo-600 bg-indigo-50 rounded-md" : "text-slate-700"} gap-x-3.5 py-3 px-4 text-sm font-medium -mt-px  hover:text-blue-600 focus:z-10  dark:border-neutral-700 dark:text-white dark:hover:text-blue-600`}
                              key={index}
                              onClick={(e) => {
                                e.preventDefault();
                                handleChangeTab(child.childID);
                              }}
                            >
                              <child.icon />
                              {child.name}
                            </button>
                          );
                        })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="lg:col-span-9">{displayContent(currentTab)}</div>
      </div>
    </div>
  );
};

export default ProfileModule;
