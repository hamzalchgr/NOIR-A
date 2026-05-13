const News = () => {
  return (
    <div className="px-5 lg:px-10">
      <div className="flex items-center justify-center h-[320px]">
        <h1 className="heading-1">From the journal</h1>
      </div>

      <div>
        <article className="grid lg:grid-cols-2 lg:gap-10">
          <div className="h-full w-full overflow-hidden">
            <img
              className="h-full w-full object-center object-cover"
              src="https://framerusercontent.com/images/m3aextLVascviLxu8cwPgM5Dv4.jpg?scale-down-to=1024"
              alt=""
              loading="lazy"
            />
          </div>

          <div className="flex flex-col justify-between py-10">
            <div className="flex flex-col gap-5">
              <h4 className="font-sans font-semibold text-xl md:text-2xl lg:text-[32px]">
                Behind the Scenes: A Day in the Life of Our Executive Chef, Luca
                Moretti
              </h4>

              <p>
                Step inside Roasetto’s kitchen and follow Chef Luca Moretti’s
                daily routine – from sourcing ingredients to creating
                masterpieces.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-shadow-2xs">Feb 4, 2025</p>

              <button className="bg-white text-dark rounded-full text-xs uppercase leading-none px-5 py-3.5 font-medium tracking-wide cursor-pointer">
                read more
              </button>
            </div>
          </div>
        </article>

        <ul className="flex flex-col py-8">
          <li>
            <article className="flex flex-col lg:flex-row lg:gap-10 py-8">
              <div className="aspect-3/2 w-full lg:h-[181px] lg:w-[260px] overflow-hidden">
                <img
                  className="h-full w-full object-center object-cover"
                  src="https://framerusercontent.com/images/BSWxjX31oi5jNtJdma07NAruJco.jpeg"
                  alt=""
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col justify-between py-6">
                <h4 className="font-sans font-semibold text-xl md:text-2xl lg:text-[32px]">
                  New on the Menu: The Black Truffle Risotto You Can’t Miss
                </h4>

                <div className="flex items-center justify-between">
                  <p className="text-shadow-2xs uppercase">jan 4, 2025</p>

                  <button className=" font-medium uppercase text-xs tracking-wide cursor-pointer">
                    read more
                  </button>
                </div>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default News;
