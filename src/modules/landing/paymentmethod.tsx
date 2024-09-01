import Container from "@/components/container";
import React from "react";

const PaymentMethod = () => {
  return (
    <section className="bg-white py-5 lg:py-2">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <div className="flex justify-center w-full">
              <img
                src="/assets/images/hero/payment-logo.svg"
                alt=""
                className="h-60 w-60 lg:h-[550px] lg:w-[550px]"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="space-y-2 lg:space-y-4 text-center lg:text-start">
              <p className="text-indigo-700 font-semibold text-sm lg:text-lg">
                Metode Pembayaran
              </p>
              <h2 className="font-semibold text-lg lg:text-3xl text-slate-700">
                Punya kesulitan untuk pembayaran dijaman sekarang ?
              </h2>
              <p className="text-xs lg:text-sm text-gray-500">
                Tidak perlu bingung lagi untuk catat setiap transaksi anda
                dengan berbagai jenis pembayaran, kami memberikan fitur untuk
                membantu anda melakukan transaksi
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PaymentMethod;
