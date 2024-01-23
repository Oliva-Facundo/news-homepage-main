import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="w-full">
        <section className="md:grid md:grid-cols-3 gap-8">
          <div className=" col-span-2">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="/src/images/image-web-3-desktop.jpg"
              />
              <img src="/src/images/image-web-3-mobile.jpg" alt="Web" />
            </picture>
            <div className="flex justify-between pt-8 max-md:flex-col max-md:mb-14">
              <h1 className="text-6xl font-extrabold w-2/5 max-md:w-full max-md:text-5xl max-md:mb-6">
                The Bright Future of Web 3.0?
              </h1>
              <div className="w-2/4 flex flex-col items-start justify-between max-md:w-full max-md:gap-6">
                <p className=" text-[15px]">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button className=" bg-softRed py-3 px-8 uppercase text-base text-offWhite tracking-widest text-[15px] hover:bg-veryDarkBlue ">
                  {" "}
                  read more{" "}
                </button>
              </div>
            </div>
          </div>

          <aside className=" col-span-1 bg-veryDarkBlue p-8 flex flex-col justify-between max-md:h-[37rem]">
            <h2 className=" text-softOrange text-5xl font-bold">New</h2>
            <div>
              <a className=" text-offWhite text-lg font-bold hover:text-softOrange">
                Hydrogen VS Electric Cars
              </a>
              <p className=" text-grayishBlue">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
            <div className="h-[1px] w-full bg-darkGrayishBlue"></div>
            <div>
              <a className=" text-offWhite text-lg font-bold hover:text-softOrange">
                The Downsides of AI Artistry
              </a>
              <p className=" text-grayishBlue">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <div className="h-[1px] w-full bg-darkGrayishBlue"></div>
            <div>
              <a className=" text-offWhite text-lg font-bold hover:text-softOrange">
                Is VC Funding Drying Up?
              </a>
              <p className=" text-grayishBlue">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </aside>
        </section>

        <section className="grid grid-cols-3 w-full mt-12 max-md:flex max-md:flex-col max-md:gap-7 max-md:mb-14">
          <div className="flex">
            <img
              src="/src/images/image-retro-pcs.jpg"
              alt="retro pcs"
              className=" w-[5.5rem]"
            />
            <div className="pl-6">
              <h3 className=" text-3xl text-grayishBlue font-bold">01</h3>
              <a href="" className="font-bold text-lg hover:text-softOrange">
                Reviving Retro PCs
              </a>
              <p className=" text-grayishBlue w-[75%] max-md:w-full">
                What happens when old PCs are given modern upgrades?
              </p>
            </div>
          </div>
          <div className="flex">
            <img
              src="/src/images/image-top-laptops.jpg"
              alt="retro pcs"
              className=" w-[5.5rem]"
            />
            <div className="pl-6">
              <h3 className=" text-3xl text-grayishBlue font-bold">02</h3>
              <a href="" className="font-bold text-lg hover:text-softOrange">
                Top 10 Laptops of 2022
              </a>
              <p className=" text-grayishBlue w-[75%] max-md:w-full">
                Our best picks for various needs and budgets.
              </p>
            </div>
          </div>
          <div className="flex">
            <img
              src="/src/images/image-gaming-growth.jpg"
              alt="retro pcs"
              className=" w-[5.5rem]"
            />
            <div className="pl-6">
              <h3 className=" text-3xl text-grayishBlue font-bold">03</h3>
              <a href="" className="font-bold text-lg hover:text-softOrange">
                The Growth of Gaming
              </a>
              <p className=" text-grayishBlue w-[75%] max-md:w-full">
                How the pandemic has sparked fresh opportunities.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
