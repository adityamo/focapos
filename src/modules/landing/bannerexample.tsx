import Container from "@/components/container";
import React from "react";

const BannerExample = () => {
  return (
    <section className="bg-white py-5 lg:py-2 pb-2 lg:pb-8">
      <Container className="max-w-sm lg:max-w-[980px] bg-gradient-to-b from-[#4136C5] to-[#221D68] lg:rounded-xl">
        <div className="px-10 py-5 lg:py-20">
          <div className="flex flex-col">
            <div className="space-y-5">
              <h2 className="font-medium text-white text-lg lg:text-3xl text-center">
                Selalu berikan kemudahan untuk pantau setiap penjualanmu
                dimanapun
              </h2>
              <p className="font-normal text-white text-xs lg:text-sm text-center">
                Kami berikan kemudahan untuk anda untuk monitoring aktifitas
                ataupun operasional bisnis anda dimanapun, lacak penjualanmu dan
                dapatkan pengalaman pengambilan keputusan bisnis anda
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-4">
          <div className="relative z-10 mx-auto max-w-[745px]">
            <div className="mt-10">
              <img
                src="/assets/images/hero/tab-admin.png"
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
      </Container>
    </section>
  );
};

export default BannerExample;
