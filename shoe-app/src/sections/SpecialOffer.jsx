import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-sky-500">Special </span>
          Offer
        </h2>
        <p className="mt-4 info-text">
          Set out on a shopping adventure that will revolutionize your
          experience with unbelievable deals. From excellent options to
          exceptional savings, we provide unparalleled value that distinguishes
          us.
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities tailored to satisfy your specific
          desires and exceed your highest expectations. Your adventure with us
          is nothing short of extraordinary.
        </p>
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
    </section>
  );
};

export default SpecialOffer;
