import Input from "../../components/ui/Input";
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <div className="max-w-[1200px] px-4 mx-auto grid justify-center lg:grid-cols-2 lg:gap-20">
      <div className="max-w-[600px] flex flex-col gap-6">
        <div className="flex flex-col gap-4 items-center text-center">
          <h2 className="heading-2">Book a Table</h2>
          <p className="max-w-[480px]">
            Reserve your table and indulge in exquisite flavors at Noirea,
            Cracow’s haven of elegance. We can’t wait to host your perfect
            dining experience!
          </p>
        </div>

        <form className="p-5 px-5 flex flex-col items-center gap-4" action="">
          <label
            className="flex flex-col gap-2 text-xs font-medium w-full"
            htmlFor=""
          >
            NAME
            <Input type="text" placeholder="Full name" />
          </label>

          <label
            className="flex flex-col gap-2 text-xs font-medium w-full"
            htmlFor=""
          >
            E-MAIL
            <Input type="email" placeholder="your e-mail" />
          </label>

          <label
            className="flex flex-col gap-2 text-xs font-medium w-full"
            htmlFor=""
          >
            PEOPLE
            <Input type="number" placeholder="1 - 10" />
          </label>

          <div className="flex flex-col md:flex-row gap-4 w-full">
            <label
              className="flex flex-col gap-2 text-xs font-medium w-full"
              htmlFor=""
            >
              DATE
              <Input type="date" placeholder="" />
            </label>

            <label
              className="flex flex-col gap-2 text-xs font-medium w-full"
              htmlFor=""
            >
              TIME
              <Input type="time" placeholder="1 - 10" />
            </label>
          </div>

          <button
            type="submit"
            className="bg-white rounded-full h-12 text-dark font-medium w-full cursor-pointer"
          >
            MAKE RESERVATION
          </button>

          <p>
            I accept the{" "}
            <Link className="nav-link p-0 lowercase text-sm" to="">
              terms and conditions
            </Link>
          </p>
        </form>

        <div></div>
      </div>

      <div className="max-w-[600px] flex flex-col gap-3 justify-center items-center lg:items-start">
        <p className="font-medium text-[26px] text-white text-center lg:text-start">
          "Roasetto offers an unforgettable experience with its exceptional
          Italian cuisine and elegant ambiance. The perfect spot in for a taste
          of Italy."
        </p>
        <p>Jasmine Backa</p>
      </div>
    </div>
  );
};

export default Booking;
