import React, { useEffect, useState } from "react";
import DataTable from "../datatable/DataTable";
import Link from "next/link";
import { Column } from "react-table";

const CategoryTable = () => {
  const [loading, setLoading] = useState(true);
  const [categoryData, setCategoryData] = useState([]);

  const columns: ReadonlyArray<Column> = [
    {
      Header: "Job title",
      accessor: "title",
    },
    {
      Header: "Departement",
      accessor: "department",
    },
    {
      Header: "Candidate",
      accessor: "candidate",
    },
    {
      Header: "Expired Dat",
      accessor: "expiry_date",
    },
    {
      Header: () => {
        return <div className="text-center"></div>;
      },
      accessor: "action",
      Cell: (data: any) => {
        return (
          <div className="px-5 py-1.5">
            <Link
              className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
              href={""}
            >
              Edit
            </Link>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setCategoryData([]);
      setLoading(false);
    }, 4000);
  });

  return <DataTable column={columns} data={categoryData} isLoading={loading} />;
};

export default CategoryTable;
