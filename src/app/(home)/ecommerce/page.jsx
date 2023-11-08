import { useDispatch } from "react-redux";
import { BsCurrencyDollar } from "react-icons/bs";
import { Button } from "./Components";
import { earningData } from "@/data/dummy";
export default function Ecommerce() {
  // const dispatch = useDispatch();
  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-base-100 h-44 rounded-xl w-full lg:w-88 p-8 pt-9 m-3 bg-hero-pattern bg-no bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-base-300">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>
            <button
              type="button"
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full p-4"
            >
              <BsCurrencyDollar />
            </button>
          </div>
          <div className="mt-6">
            <Button
              color={"base-100"}
              text={"download"}
              borderRadius={"10px"}
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-base-100 h-44 md:w-56 p-4 ot-9 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-base-300 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
