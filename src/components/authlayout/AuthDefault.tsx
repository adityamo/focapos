import Link from "next/link";
import React, { ReactNode } from "react";
import Image from "next/image";

interface Props {
  children: ReactNode;
}

const AuthDefault = ({ children }: Props) => {
  return (
    <div className="relative flex content-center h-full w-full bg-white lg:w-full lg:px-8 lg:pt-0 xl:h-[100vh] xl:px-0">
      <div className="hidden lg:w-3/5 lg:block">
        <div className="relative h-full w-full bg-gradient-to-b from-[#4136C5] to-[#221D68] bg-cover bg-center">
          <div className="flex justify-center content-center">
            <div className="mt-[15vh] px-28 ">
              <div className="justify-center content-center space-y-3 text-center">
                <h2 className="text-white text-3xl font-semibold">
                  Mulai Petualangan Bisnis anda dengan FocaPOS
                </h2>
                <p className="text-md fw-normal text-white">
                  Selamat datang di focapos kelola dan pantau terus setiap
                  transaksi kamu
                </p>

                <div className="">
                  <Image
                    src={"/assets/images/auth/rocket.png"}
                    alt="background_auth"
                    className="mx-auto"
                    width={363}
                    height={363}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -left-16 bottom-12 z-[2] ">
            <img
              src="/assets/images/hero/circle.svg"
              alt=""
              className="hidden lg:block"
            />
          </div>
          <div className="absolute -right-0 top-0 z-[2]">
            <img
              src="/assets/images/hero/circle.svg"
              alt=""
              className="hidden lg:block"
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/5">
        <div className="mb-auto flex flex-col pl-5 pr-5 md:pl-12 md:pr-0 lg:pl-10 xl:max-w-full">
          <Link href="/" className="mt-10 lg:mt-0 w-max lg:pt-10">
            <div className="mx-auto flex h-fit w-fit items-center hover:cursor-pointer">
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.70994 2.11997L2.82994 5.99997L6.70994 9.87997C7.09994 10.27 7.09994 10.9 6.70994 11.29C6.31994 11.68 5.68994 11.68 5.29994 11.29L0.709941 6.69997C0.319941 6.30997 0.319941 5.67997 0.709941 5.28997L5.29994 0.699971C5.68994 0.309971 6.31994 0.309971 6.70994 0.699971C7.08994 1.08997 7.09994 1.72997 6.70994 2.11997V2.11997Z"
                  fill="#A3AED0"
                />
              </svg>
              <p className="ml-3 text-sm text-gray-600">Back to Landing</p>
            </div>
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthDefault;
