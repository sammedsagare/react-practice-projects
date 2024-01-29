import Button from "../components/Button";
import { aj1Mid } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex flex-col lg:flex-row justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col items-center lg:items-start lg:text-left">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg text-center lg:text-left">
          Quality&nbsp;
          <span className="text-sky-500">Beyond&nbsp;</span>
          <span>Compare</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Every step, every detail - our super quality shoes reflect unwavering
          commitment. Immerse yourself in unprecedented comfort, where
          craftsmanship meets style. Trust us to walk with you on the journey of
          excellence in footwear.
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          Our dedication to detail and quality ensures your satisfaction.
        </p>
        <div className="mt-11 lg:mt-8">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={aj1Mid}
          alt=""
          width={570}
          height={522}
          className="rounded-3xl object-contain max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
