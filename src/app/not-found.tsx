"use client";

export default function NotFound() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <div className="flex w-full justify-center">
          <img
            src="/assets/images/illustration/404.svg"
            alt=""
            width={400}
            className=""
          />
        </div>

        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="text-indigo-600"> Opps !</span>, Anda ke halaman yang
          salah
        </h1>
        <p className="mt-4 text-gray-500">
          Silahkan kembali ke halaman awal anda
        </p>

        <footer className="mt-auto text-center py-5">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              © All Rights Reserved. Focapos {currentYear}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
