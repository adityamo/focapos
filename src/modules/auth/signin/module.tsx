import {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from "react";
import { UserLogin } from "@/interface/user";
import {
  SubmitHandler,
  useForm,
  UseFormSetError,
  UseFormSetValue,
} from "react-hook-form";
import AuthDefault from "@/components/authlayout/AuthDefault";
import InputText from "@/components/inputs/InputText";
import InputPassword from "@/components/inputs/InputPassword";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/entities";

interface Props {
  onSubmit: SubmitHandler<UserLogin>;
  errorMsg: string;
  onLoading: boolean;
}

export type SignInFormRefType = {
  setError: UseFormSetError<UserLogin>;
  setValue: UseFormSetValue<UserLogin>;
};

const SignInModule: ForwardRefRenderFunction<SignInFormRefType, Props> = (
  { onSubmit, errorMsg, onLoading },
  ref
) => {
  const { handleSubmit, control, setError, setValue } = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  useImperativeHandle(ref, () => ({
    setError,
    setValue,
  }));

  return (
    <AuthDefault>
      <div className="mb-16 mt-10 w-full lg:px-16 lg:py-5">
        <div className="text-start space-y-3 ">
          <h4 className="text-lg lg:text-3xl text-slate-700 font-semibold">
            Masuk Aplikasi Foca
          </h4>
          <p className="text-gray-400 text-xs lg:text-sm font-normal">
            Silahkan masuk dengan akun aplikasi anda
          </p>
        </div>
        {errorMsg && (
          <div className="mt-4">
            <div
              className="mt-2 bg-red-100 border border-red-200 text-sm text-red-800 rounded-lg p-4 dark:bg-red-800/10 dark:border-red-900 dark:text-red-500"
              role="alert"
              tabIndex={-1}
              aria-labelledby="hs-soft-color-danger-label"
            >
              <span id="hs-soft-color-danger-label" className="font-bold">
                Gagal
              </span>{" "}
              {errorMsg}
            </div>
          </div>
        )}
        {/* 
        <div className="mt-5 flex w-full">
          <button
            type="button"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg  bg-indigo-50 text-gray-800 shadow-sm hover:bg-indigo-100 focus:outline-none focus:bg-indigo-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          >
            <svg
              className="w-4 h-auto"
              width="46"
              height="47"
              viewBox="0 0 46 47"
              fill="none"
            >
              <path
                d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                fill="#4285F4"
              />
              <path
                d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                fill="#34A853"
              />
              <path
                d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                fill="#FBBC05"
              />
              <path
                d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                fill="#EB4335"
              />
            </svg>
            Sign up with Google
          </button>
        </div>
        <div className="py-5 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
          Atau
        </div> */}
        <form className="py-5 lg:py-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-y-4">
            <InputText
              name="email"
              label="Email"
              placeholder="Masukkan nama anda"
              control={control}
            />
            <InputPassword
              name="password"
              label="Password"
              placeholder="password"
              control={control}
            />
            <Link href={""} className="font-normal text-sm text-indigo-700">
              Lupa password ?
            </Link>
            <button
              type="submit"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-indigo-700 text-white hover:bg-indigo-800 disabled:opacity-50 disabled:pointer-events-none"
              disabled={onLoading}
            >
              {onLoading ? (
                <>
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 me-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Signing...
                </>
              ) : (
                "Masuk"
              )}
            </button>
          </div>
        </form>
        <div className="flex w-full justify-center pt-4 items-center">
          <p className="text-gray-500 text-sm">
            Belum punya akun foca ?
            <Link href={"/auth/register"}>
              <span className="text-indigo-700 ms-2 font-semibold">Daftar</span>
            </Link>
          </p>
        </div>
      </div>
    </AuthDefault>
  );
};

export default forwardRef(SignInModule);
