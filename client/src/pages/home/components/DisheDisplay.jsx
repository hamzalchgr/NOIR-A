import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DisheDisplay = ({ category }) => {
  const [index, setIndex] = useState(0);

  const updateIndex = () =>
    setIndex((prev) => (prev + 1) % category.menu.length);

  const menu = category?.menu || [];

  useEffect(() => {
    if (!menu.length) return;

    const timer = setTimeout(() => {
      updateIndex();
    }, 100);

    return () => clearTimeout(timer);
  }, [index, menu.length]);
  return (
    <Link to="/menu" className="relative h-fit flex items-center justify-center group">
      <h2 className="lg:absolute text-4xl md:text-6xl lg:text-[160px] font-medium leading-none p-6">
        {category.category}
      </h2>

      <div className="hidden lg:block lg:opacity-0 h-[325px] w-[325px] lg:group-hover:opacity-100 overflow-hidden">
        <img
          className="h-full w-full object-center object-cover"
          src={menu[index].img}
          alt={menu[index].name}
          loading="lazy"
        />
      </div>
    </Link>
  );
};

export default DisheDisplay;
