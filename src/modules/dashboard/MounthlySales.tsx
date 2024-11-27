"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MounthlySales = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const labelsRC = [
    `Jan ${currentYear}`,
    `Feb ${currentYear}`,
    `Mar ${currentYear}`,
    `Apr ${currentYear}`,
    `May ${currentYear}`,
    `Jun ${currentYear}`,
    `Jul ${currentYear}`,
    `Aug ${currentYear}`,
    `Sep ${currentYear}`,
    `Oct ${currentYear}`,
    `Nov ${currentYear}`,
    `Dec ${currentYear}`,
  ];
  const revenueDataRC = [127, 245, 399, 527, 250, 0, 0, 0, 0, 0, 0, 0];
  const costDataRC = [59, 28, 11, 45, 66, 0, 0, 0, 0, 0, 0, 0];

  const dataBar = {
    labels: labelsRC,
    datasets: [
      {
        label: "Revenue",
        data: revenueDataRC,
        backgroundColor: "#6C5FFC",
      },
      {
        label: "Cost",
        data: costDataRC,
        backgroundColor: "#FFD7D3",
      },
    ],
  };

  const optionsBar = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: false,
      },
    },
  };

  return (
    <div className="relative bg-white dark:bg-slate-700 rounded-md shadow-sm">
      <div className="relative w-full p-5 border-b border-gray-200">
        <div className="space-y-1">
          <h5 className="font-semibold text-xl text-slate-700 dark:text-white">
            Grafik Penjualan
          </h5>
          <p className="text-sm text-gray-500 font-medium dark:text-white">
            Pantau selalu setiap kegiatan yang ada di tokomu
          </p>
        </div>
      </div>
      <div className="relative p-5">
        <div className="grid lg:grid-cols-12 gap-5">
          <div className="relative lg:col-span-4 lg:border-r lg:border-gray-200">
            <div className="flex flex-col lg:flex-row w-full lg:justify-between">
              <div className="space-y-1">
                <p className="text-slate-700 dark:text-white font-medium">
                  Total Revenue
                </p>
                <h3 className="text-slate-700 dark:text-white font-semibold text-3xl">
                  Rp 1.258.000
                </h3>
              </div>
            </div>
            <div className="space-y-1 mt-7">
              <p className="text-slate-700 dark:text-white font-medium">
                Total Cost
              </p>
              <h3 className="text-red-500 dark:text-white font-semibold text-3xl">
                Rp 573.390
              </h3>
              <small className="text-gray-500 dark:text-gray-100 text-xs font-normal">
                * anda dapat melihat setiap laporan penjulanan anda perbulan,
                silahkan gunakan filter yang disediakan
              </small>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="relative space-y-4">
              <p className="text-slate-700 font-medium">Grafik Penjualan</p>
              <div
                style={{
                  position: "relative",
                  margin: "auto",
                  width: "99%",
                  height: "300px",
                }}
              >
                <Bar data={dataBar} options={optionsBar} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MounthlySales;
