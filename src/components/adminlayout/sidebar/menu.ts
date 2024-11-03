import { FiBox, FiShoppingBag, FiLayers, FiFile, FiUser } from "react-icons/fi";
import { MdOutlineWarehouse, MdOutlinePayments } from "react-icons/md";

export const menuItem = [
  {
    name: "PERSEDIAAN",
    menuItems: [
      {
        icon: FiBox,
        label: "Produk",
        route: "",
        children: [
          { label: "Daftar Category", route: "/admin/product/category" },
          { label: "Daftar Product", route: "/admin/product/product" },
          { label: "Daftar Layanan", route: "/admin/product/services" },
          { label: "Daftar Additional", route: "/admin/product/additional" },
          { label: "Daftar Ongkos Kirim", route: "/admin/product/delivery" },
          { label: "Cetak Barcode", route: "/admin/product/barcode" },
        ],
      },
      {
        icon: MdOutlineWarehouse,
        label: "Inventory",
        route: "",
        children: [
          { label: "Stock Masuk", route: "/admin/inventory/stockin" },
          { label: "Stock Keluar", route: "/admin/inventory/stockout" },
        ],
      },
    ],
  },
  {
    name: "PENJUALAN",
    menuItems: [
      {
        icon: FiLayers,
        label: "Transaksi Penjualan",
        route: "",
        // children: [],
      },
      {
        icon: FiShoppingBag,
        label: "Buat Order",
        route: "",
        // children: [],
      },
      {
        icon: MdOutlinePayments,
        label: "Pembayaran",
        route: "",
        // children: [],
      },
    ],
  },
  {
    name: "LAPORAN",
    menuItems: [
      {
        icon: FiFile,
        label: "Laporan Penjualan",
        route: "",
        children: [
          { label: "Penjualan Outlet", route: "/admin/laporan/reportotlet" },
          { label: "Laporan Jenis Order", route: "/admin/laporan/reportorder" },
          { label: "Laporan Jenis Bayar", route: "/admin/laporan/reporttype" },
          {
            label: "Penjualan Perperiode",
            route: "/admin/laporan/reportperiod",
          },
        ],
      },
    ],
  },
  {
    name: "PENGATURAN",
    menuItems: [
      {
        icon: FiUser,
        label: "Akun Profile",
        route: "",
        children: [
          { label: "Informasi Akun", route: "/admin/settings/account" },
          { label: "Informasi Outlet", route: "/admin/settings/outlet" },
          { label: "Informasi Rekening", route: "/admin/settings/rekening" },
        ],
      },
    ],
  },
];
