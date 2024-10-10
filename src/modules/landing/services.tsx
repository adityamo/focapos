import Container from "@/components/container";
import React from "react";

const ServicesLanding = () => {
  return (
    <section className="bg-white">
      <Container className="py-10">
        <div className="flex flex-col lg:flex-row lg:space-x-28 lg:items-center">
          <div className="lg:w-1/2">
            <div className="space-y-1 lg:space-y-4 text-center lg:text-start lg:ms-10 pb-5 lg:pb-0">
              <h2 className="font-semibold text-lg lg:text-3xl text-slate-700">
                Bentuk Layanan Kami ?
              </h2>
              <p className="text-xs lg:text-sm text-gray-500">
                Kami memberikan beberapa fitur unggulan untuk anda untuk
                mempercepat proses bisnis anda. Semua kebutuhan anda akan kami
                cover dari awal hingga akhir
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="px-2 lg:px-10 py-5 border border-gray-300 rounded-lg">
              <div className="grid lg:grid-cols-2 gap-4">
                <div className="flex flex-row lg:flex-col items-center text-start lg:text-center lg:border-r-2 border-gray-200 p-2 space-y-2">
                  <div className="bg-indigo-100 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-full  text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px] md:mr-4 md:h-[50px] md:max-w-[50px] xl:mr-6 xl:h-[60px] xl:max-w-[60px]">
                    <img
                      src="/assets/icon/hero/icon-1.svg"
                      alt=""
                      className="h-30 w-30 lg:h-[550px] lg:w-[550px]"
                    />
                  </div>
                  <div className="flex flex-col lg:flex-col ms-5 lg:ms-0">
                    <h5 className="font-semibold text-sm lg:text-lg text-slate-700">
                      Penggunaan Mudah
                    </h5>
                    <p className="text-gray-500 text-xs">
                      Kami berikan kemudahan untuk mengakses berbagai fitur
                    </p>
                  </div>
                </div>
                <div className="flex flex-row lg:flex-col items-center text-start lg:text-center p-2 space-y-2">
                  <div className="bg-indigo-100 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-full  text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px] md:mr-4 md:h-[50px] md:max-w-[50px] xl:mr-6 xl:h-[60px] xl:max-w-[60px]">
                    <img
                      src="/assets/icon/hero/icon-2.svg"
                      alt=""
                      className="h-30 w-30 lg:h-[550px] lg:w-[550px]"
                    />
                  </div>
                  <div className="flex flex-col lg:flex-col ms-5 lg:ms-0">
                    <h5 className="font-semibold text-sm lg:text-lg text-slate-700">
                      Laporan
                    </h5>
                    <p className="text-gray-500 text-xs">
                      Berbagai jenis laporan yang anda butuhkan akan kami
                      sajikan
                    </p>
                  </div>
                </div>
                <div className="flex flex-row lg:flex-col items-center text-start lg:text-center  lg:border-r p-2 space-y-2">
                  <div className="bg-indigo-100 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-full  text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px] md:mr-4 md:h-[50px] md:max-w-[50px] xl:mr-6 xl:h-[60px] xl:max-w-[60px]">
                    <img
                      src="/assets/icon/hero/icon-3.svg"
                      alt=""
                      className="h-30 w-30 lg:h-[550px] lg:w-[550px]"
                    />
                  </div>
                  <div className="flex flex-col lg:flex-col ms-5 lg:ms-0">
                    <h5 className="font-semibold text-sm lg:text-lg text-slate-700">
                      Integrasi
                    </h5>
                    <p className="text-gray-500 text-xs">
                      Menghubungkan dengan BANK, POS, E-commerce dan pajak untuk
                      akurasi data
                    </p>
                  </div>
                </div>
                <div className="flex flex-row lg:flex-col items-center text-start lg:text-center p-2 space-y-2">
                  <div className="bg-indigo-100 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-full  text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px] md:mr-4 md:h-[50px] md:max-w-[50px] xl:mr-6 xl:h-[60px] xl:max-w-[60px]">
                    <img
                      src="/assets/icon/hero/icon-4.svg"
                      alt=""
                      className="h-15 w-15 lg:h-15 lg:w-15"
                    />
                  </div>
                  <div className="flex flex-col lg:flex-col ms-5 lg:ms-0">
                    <h5 className="font-semibold text-sm lg:text-lg text-slate-700">
                      Analisa
                    </h5>
                    <p className="text-gray-500 text-xs">
                      Analisa tentang bisnis anda untuk memudahkan pengambilan
                      keputusan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesLanding;
