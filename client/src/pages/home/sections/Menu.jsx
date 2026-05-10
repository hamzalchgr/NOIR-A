import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <section className="">
      <div className="h-screen max-w-screen flex flex-col items-center justify-center gap-25 px-4">
        <div className="flex flex-col items-center gap-5 text-center">
          <h2 className="heading-2 max-w-225">
            Experience Unmatched Luxury and Quality at Noiréa
          </h2>
          <p className="max-w-180">
            Indulge in an exquisite dining experience where every detail is
            crafted for your pleasure. At Noiréa, we prioritize quality
            ingredients and exceptional service to ensure your visit is nothing
            short of extraordinary.
          </p>
        </div>

        <Link
          to="/menu"
          className="bg-white px-5 py-3 rounded-full text-dark font-medium"
        >
          DISCOVER OUR MENU
        </Link>
      </div>

      <ul className="flex flex-col gap-4 pb-20">
        <li>
          <div className="relative flex items-center justify-center">
            <h2 className="absolute text-4xl md:text-6xl lg:text-[160px] font-medium leading-none p-6">
              Pasta
            </h2>

            <div className="hidden lg:block h-[325px] w-[325px] overflow-hidden">
              <img
                className="h-full w-full object-center object-cover"
                src="https://framerusercontent.com/images/lXhOHGPNKfiNNvzCzK7HWqJYQc.jpeg?scale-down-to=1024"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Menu;
