import Container from "@/components/container";
import React from "react";

const OurFeature = () => {
  return (
    <section className="bg-white py-5 lg:py-20">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <div className="space-y-2 lg:space-y-4 text-center lg:text-start lg:ms-10">
              <p className="text-indigo-700 font-semibold pt-5 text-sm lg:text-lg">
                Fitur Kami
              </p>
              <h2 className="font-semibold text-lg lg:text-3xl text-slate-700">
                Mau pantau rekap penjualan anda ? Kami berikan dashboard
                informatif
              </h2>
              <p className="text-xs lg:text-sm text-gray-500">
                Aplikasi kami memberikan informasi secara lengkap mengenai
                setiap kegiatan penjualan anda, tak perlu khawatir lagi untuk
                laporan penjualan anda
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="flex justify-center w-full">
              <img
                src="/assets/images/hero/feature-logo.svg"
                alt=""
                className="h-60 w-60 lg:h-[550px] lg:w-[550px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurFeature;
