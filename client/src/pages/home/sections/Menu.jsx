import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DisheDisplay from "../components/DisheDisplay";

// 📌 Get all menu
// GET /api/menu
// 📌 Get category
// GET /api/menu/drinks
// GET /api/menu/pastas
// 📌 Get single dish
// GET /api/menu/dish/Golden Espresso Martini

const Menu = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [menu, setMenu] = useState([]);

  const getMenu = async (signal) => {
    try {
      setLoading(true);
      setErrorMsg(null);

      const res = await fetch("http://localhost:5000/api/menu", { signal });

      if (!res.ok) {
        throw new Error("Failed to get menu");
      }

      const result = await res.json();
      setMenu(result);
    } catch (error) {
      if (error.name !== "AbortError") setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    getMenu(controller.signal);

    return () => controller.abort();
  }, []);

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
        {menu.map((category) => (
          <li key={category.id}>
            <DisheDisplay category={category} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Menu;
