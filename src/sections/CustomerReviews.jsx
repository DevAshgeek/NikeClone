import Reviews from "../components/Reviews";
import { reviews } from "../constants";

const CostumerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-4xl text-center font-bold">
        What our
        <span className="text-coral-red"> Customers</span>
        Say ?
      </h3>
      <p className="info-text m-auto mt-4 m-w-lg text-center">
        Hear genuine stories from our satisfied customers aobut their
        expectional experiences with us.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews?.map(
          (review, index) => review && <Reviews key={index} {...review} />
        )}
        <Reviews />
      </div>
    </section>
  );
};

export default CostumerReviews;
