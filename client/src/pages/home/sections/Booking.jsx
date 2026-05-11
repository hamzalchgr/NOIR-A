import Input from "../../../components/ui/Input";

import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <section className="max-w-[800px] mx-auto flex flex-col gap-6">
      <div className="flex flex-col gap-4 items-center text-center">
        <h2 className="heading-2">Book a Table</h2>
        <p>Reserve your table and indulge in exquisite flavors at Noirea, Cracow’s haven of elegance. We can’t wait to host your perfect dining experience!</p>
      </div>

      <form className="px-30 flex flex-col items-center gap-4" action="">
        <label className="flex flex-col gap-2 text-xs font-medium w-full" htmlFor="">
          NAME
          <Input type="text" placeholder="Full name" />
        </label>
        
        <label className="flex flex-col gap-2 text-xs font-medium w-full" htmlFor="">
          E-MAIL
          <Input type="email" placeholder="your e-mail" />
        </label>
        
        <label className="flex flex-col gap-2 text-xs font-medium w-full" htmlFor="">
          PEOPLE
          <Input type="number" placeholder="1 - 10" />
        </label>

        <div className="flex gap-4 w-full">
          <label className="flex flex-col gap-2 text-xs font-medium w-full" htmlFor="">
          DATE
          <Input type="date" placeholder="" />
        </label>

          <label className="flex flex-col gap-2 text-xs font-medium w-full" htmlFor="">
          TIME
          <Input type="time" placeholder="1 - 10" />
        </label>
        </div>

        <button type="submit" className="bg-white rounded-full h-12 text-dark font-medium w-full">MAKE RESERVATION</button>

        <p>I accept the <Link to="">terms and conditions</Link></p>
      </form>
    </section>
  )
}

export default Booking