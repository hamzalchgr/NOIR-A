import { useEffect, useState } from "react";

const Menu = () => {
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [menu, setMenu] = useState([]);

  const getMenu = async (signal) => {
    try {
      setLoading(true);
      setErrMsg(null);

      const res = await fetch("http://localhost:5000/api/menu", { signal });
      if (!res.ok) {
        throw new Error("Failed to get data");
      }

      const result = await res.json();
      setMenu(result);
    } catch (error) {
      if (error !== "AbortError") setErrMsg(error.message);
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
    <div className="max-w-[725px] mx-auto">
      <div className="flex items-center justify-center h-[320px]">
        <h1 className="heading-1">Menu</h1>
      </div>

      <ul className="flex flex-col gap-20 px-5 md:px-0">
        {menu.map(({ id, category, menu }) => (
          <li key={id} className="flex flex-col gap-3">
            <h5 className="font-medium text-[32px]">{category}</h5>
            <ul className="flex flex-col">
              {menu.map(({ name, desc, price, img }) => (
                <li
                  key={name}
                  className="relative py-5 leading-tight flex flex-col gap-6 md:flex-row lg:items-center lg:justify-center group"
                >
                  <div className="aspect-square w-full md:w-[112px] lg:w-[200px] overflow-hidden lg:absolute lg:hidden lg:group-hover:block -z-10">
                    <img
                      className="h-full w-full object-center object-cover"
                      src={img}
                      alt={name}
                      loading="lazy"
                    />
                  </div>

                  <div className="flex items-start justify-between w-full">
                    <div className="flex flex-col gap-1">
                      <p className="text-white font-medium text-lg">{name}</p>
                      <p>{desc}</p>
                    </div>

                    <p className="text-white font-medium text-lg">
                      ${price.toFixed(2)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
