import { useRef } from "react";
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -300, // Adjust scroll distance
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 300, // Adjust scroll distance
      behavior: "smooth",
    });
  };

  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Built to be <span className="text-coral-red">Different</span>
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-start-gray">
          Experience the difference and feel the stability and Air cushioning.
          Discover the world of comfort, design, and quality.
        </p>
      </div>

      {/* Product Carousel with Arrows */}
      <div className="relative mt-16">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white hover:text-xl hover:scale-105 hover:font-bold text-coral-red p-3 px-4 rounded-full shadow-lg z-10"
        >
          &#8592;
        </button>

        {/* Scrollable Product Container */}
        <div
          ref={scrollContainerRef}
          className="flex w-full overflow-x-scroll scrollbar-hide gap-36 max-sm:gap-16 whitespace-nowrap"
        >
          {products.map((product) => (
            <PopularProductCard key={product.name} {...product} />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2  bg-white hover:text-xl hover:scale-105 hover:font-bold text-coral-red p-3 px-4 rounded-full shadow-lg z-10"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default PopularProducts;
