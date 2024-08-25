import React from "react";

const HeroLanding = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#4136C5] to-[#221D68] pt-[50px] md:pt-[130px] lg:pt-[100px]">
      <div className="container mx-auto">
        <div className="mx-2 lg:-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div className="hero-content text-center">
              <h1 className="mx-auto text-[22px] mb-5 max-w-[830px] text-md lg:text-[42px] lg:text-4xl font-semibold leading-snug text-white ">
                Kemudahaan di setiap kegiatan penjualanmu dengan Point of sale
                focaPOS
              </h1>
              <p className="mx-auto mb-8 max-w-[830px] text-xs lg:text-sm text-[#e4e4e4]">
                Kamu pemilik UMKM yang berjuang untuk mengelola bisnis dengan
                lebih efisien? Kami memahami bahwa setiap transaksi dan
                pelanggan sangat berharga bagi Kamu. Oleh karena itu, kami hadir
                dengan solusi POS yang dirancang khusus untuk memenuhi kebutuhan
                unik UMKM Anda.
              </p>
              <div className="flew flex-wrap items-center justify-center">
                <a
                  href=""
                  className="mx-2 inline-flex text-indigo-700 items-center justify-center rounded-lg bg-white px-5 py-3 text-center text-base font-normal text-dark hover:bg-opacity-90 sm:px-10"
                >
                  Mulai Bisnis
                </a>
                <a
                  href=""
                  className="mx-2 inline-flex text-white  items-center justify-center rounded-lg border border-white px-5 py-3 text-center text-base font-normal text-dark hover:bg-opacity-90 sm:px-10"
                >
                  Fitur Kami
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4">
          <div className="relative z-10 mx-auto max-w-[845px]">
            <div className="mt-16">
              <img
                src="/assets/images/hero/hero-background.jpg"
                alt=""
                className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
              />
            </div>
            <div className="absolute -left-16 bottom-0 z-[-1] ">
              <img
                src="/assets/images/hero/circle.svg"
                alt=""
                className="hidden lg:block"
              />
            </div>
            <div className="absolute -right-16 top-0 z-[-1]">
              <img
                src="/assets/images/hero/circle.svg"
                alt=""
                className="hidden lg:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLanding;
