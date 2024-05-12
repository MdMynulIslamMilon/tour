import Header from "../Header/Header";
import { FaCalculator } from "react-icons/fa";
const Destination = () => {
  return (
    <div>
    <Header></Header>
    <div className="flex gap-2 items-center mt-32">
      <div className=" ">
        <h1 className="font-semibold text-2xl">COX'S BAZAR</h1>
        <p>
          Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known
          for its very long, sandy beachfront, stretching from Sea Beach in the
          north to Kolatoli Beach in the south. Aggameda Khyang monastery is
          home to bronze statues and centuries-old Buddhist manuscripts. South
          of town, the tropical rainforest of Himchari National Park has
          waterfalls and many birds. North, sea turtles breed on nearby Sonadia
          Island.
        </p>
      </div>
      <div className="">
        <div className="bg-green-100 w-[506px]  p-6 mr-2">
          <div className="ml-3">
            <label htmlFor="">Origin</label>
            <input
              className="text-white block p-1 bg-slate-300 px-32"
              type="text"
              placeholder="   Dhaka"
            />
            <label htmlFor="">Destination</label>
            <input
              className="text-white block p-1 bg-slate-300 px-32"
              type="text"
              placeholder="    Cox s Bazar "
            />
          </div>
          <div className="flex gap-14 ml-3 mb-4">
            <div className="mt-4 relative ">
              <input type="text" className="text-white block p-1 bg-slate-300" placeholder="01/09" />
              <div className="absolute top-2 right-3">
                <FaCalculator></FaCalculator>
              </div>
            </div>
            <div className="mt-4 relative">
              <input type="text" className="text-white block p-1 bg-slate-300"  placeholder="01/09" />
              <div className="absolute top-1 right-3">
                <FaCalculator></FaCalculator>
              </div>
            </div>
            
          </div>
          <div className="flex items-center justify-center"><button className="bg-[#F9A51A] p-2 px-8 rounded-e-md  ">Start Booking</button></div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Destination;
