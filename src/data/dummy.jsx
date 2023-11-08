import { MdOutlineSupervisorAccount } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { FiBarChart } from "react-icons/fi";
import { HiOutlineRefresh } from "react-icons/hi";
export const themeColors = [
  { name: "cupcake", color: "gray" },
  { name: "cyberpunk", color: "yellow" },
  { name: "valentine", color: "pink" },
  { name: "aqua", color: "blue" },
];

export const dropDownData = [
  { id: 1, time: "March 2023" },
  { id: 2, time: "April 2023" },
  { id: 3, time: "May 2023" },
  { id: 4, time: "June 2023" },
];

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: "39,354",
    percentage: "-4%",
    title: "Customers",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
  {
    icon: <BsBoxSeam />,
    amount: "4,354",
    percentage: "+23%",
    title: "Products",
    iconColor: "rgb(255,244,229)",
    iconBg: "rgb(255,201,15)",
    pcColor: "green-600",
  },
  {
    icon: <FiBarChart />,
    amount: "423,354",
    percentage: "+38%",
    title: "Sales",
    iconColor: "rgb(228,106,118)",
    iconBg: "rgb(255,244,229)",
    pcColor: "green-600",
  },
  {
    icon: <HiOutlineRefresh />,
    amount: "39,354",
    percentage: "-12%",
    title: "Refunds",
    iconColor: "rgb(0,194,146)",
    iconBg: "rgb(235,250,242)",
    pcColor: "red-600",
  },
];
