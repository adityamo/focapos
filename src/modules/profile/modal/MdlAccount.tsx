import React from "react";
import Modal from "@/components/modal";
import { useForm } from "react-hook-form";
import InputText from "@/components/inputs/InputText";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

type MdlValues = {
  nameVal: string;
};

const MdlAccount = ({ isOpen, onClose }: Props) => {
  const { control } = useForm<MdlValues>({
    defaultValues: {
      nameVal: "",
    },
  });
  return (
    <Modal isOpen={isOpen} className="max-w-lg">
      {/* Header */}
      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
        <h3 className="text-sm lg:text-sm font-medium text-gray-900 dark:text-white">
          Ubah Data
        </h3>
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="large-modal"
          onClick={onClose}
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>
      <form action="" className="">
        <div className="relative p-5">
          <InputText
            name="nameVal"
            label="Nama"
            placeholder="SilahkanMasukan Data Anda"
            control={control}
          />
        </div>
        <div className="border border-top p-5 flex w-full justify-center">
          <div className="flex w-full justify-center">
            <button className="bg-indigo-700 px-24 py-2 text-white rounded-md text-sm hover:bg-indigo-800">
              Simpan
            </button>
          </div>
        </div>
      </form>
      {/* End Header */}
    </Modal>
  );
};

export default MdlAccount;
