import { TokoValues } from "@/interface/toko";
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from "react";
import {
  SubmitHandler,
  useForm,
  UseFormSetError,
  UseFormSetValue,
} from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputText from "@/components/inputs/InputText";

interface Props {
  onSubmit: SubmitHandler<TokoValues>;
  errorMsg: string;
  onLoading: boolean;
}

export type FormUsahaRefType = {
  setError: UseFormSetError<TokoValues>;
  setValue: UseFormSetValue<TokoValues>;
};

const schema = Yup.object().shape({
  ownername: Yup.string().required("Nama Wajib diisi"),
  businessname: Yup.string().required("Nama Usaha Wajib disi"),
  businesstype: Yup.string().required("Tipe Usaha Wajib disi"),
  longtimeoperation: Yup.string().required("Lama beroperasional Wajib disi"),
  provinsi: Yup.string().required("Provinsi Wajib disi"),
  city: Yup.string().required("Kota Wajib disi"),
  district: Yup.string().required("Kecamatan Wajib disi"),
});

const FormUsaha: ForwardRefRenderFunction<FormUsahaRefType, Props> = (
  { onSubmit, errorMsg, onLoading },
  ref
) => {
  const { handleSubmit, control, setError, setValue } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      ownername: "",
      businessname: "",
      businesstype: "",
      longtimeoperation: "",
      provinsi: "",
      city: "",
      district: "",
    },
  });

  useImperativeHandle(ref, () => ({
    setError,
    setValue,
  }));

  return (
    <div className="flex justify-center w-full">
      <div className="mt-12 p-4 relative z-10 max-w-2xl bg-white border rounded-xl sm:mt-10 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 w-full">
        <div className="flex w-full justify-center">
          <h4 className="text-2xl mb-5 text-slate-700 font-semibold">
            Informasi Usaha
          </h4>
        </div>
        <form action="" className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 p-5">
            <InputText
              name="ownername"
              label="Nama Pemilik"
              placeholder="Masukkan nama anda"
              control={control}
            />
            <InputText
              name="businessname"
              label="Nama Usaha"
              placeholder="Masukkan nama Usaha"
              control={control}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default forwardRef(FormUsaha);
