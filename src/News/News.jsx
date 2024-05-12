import Rectangle from "../assets/Rectangle 1.png";
import Navbar from "../Navbar/Navbar";
import sajek from '../assets/Sajek.png'
import sreemongol from '../assets/Sreemongol.png'
import sundorbon from '../assets/sundorbon.png'
const News = () => {
  return (
    <div className="">
      <div className=" absolute  h-full  lg:mx-5 opacity-90 blur-sm bg-gradient-to-r from-yellow-000 via-green-300 to-purple-600">
        <img src={Rectangle} alt="" />
      </div>
      <div className="relative top-4">
        <Navbar></Navbar>
      </div>
      <div className="flex  items-center mt-10 gap-2 mx-12">
        <div className="text-white relative ">
          <h1 className="font-semibold text-2xl">COX'S BAZAR</h1>
          <p>
            Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s
            known for its very long, sandy beachfront, stretching from Sea Beach
            in the north to Kolatoli Beach in the south. Aggameda Khyang
            monastery is home to bronze statues and centuries-old Buddhist
            manuscripts. South of town, the tropical rainforest of Himchari
            National Park has waterfalls and many birds. North, sea turtles
            breed on nearby Sonadia Island.
          </p>
        </div>
        <div className="carousel ">
        
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src={sajek}
              className=" w-72"
            />
            <div className="absolute flex gap-5 left-20 right-5 -bottom-16">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src={sreemongol}
              className=" w-72"
            />
            <div className="absolute flex gap-5 left-20 right-5 -bottom-16">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src={sundorbon}
              className=" w-72"
            />
            <div className="absolute flex gap-5 left-20 right-5 -bottom-16">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
