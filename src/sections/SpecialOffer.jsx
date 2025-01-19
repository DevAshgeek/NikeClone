import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section>
      <div className="max-container flex justify-wrap items-center max-lg:flex-col-reverse gap-10">
        <div className="flex-1">
          <img src={offer} alt="offers" width={773} height={687} />
        </div>

        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            Special Offer
            <span className="text-coral-red"> Super</span>
            <br />
            <span className="text-coral-red">Quality</span> Shoes
          </h2>

          <p className="mt-4 lg:max-w-lg info-text">
            Embark on the shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations, Your journey with us
            is nothing short of exceptional.{" "}
          </p>

          {/* button */}
          <div className="mt-11 flex flex-wrap gap-4">
            <Button label="Shop now" iconURL={arrowRight} />
            <Button
              label="Learn more"
              backgroundColor="bg-white"
              borderColor="border-slate-gray"
              textColor="text-slate-gray"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
