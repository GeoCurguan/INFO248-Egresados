export const HeroIcon = ({ title = "", icon }) => {
  return (
    <div
      // red circle
      className="flex justify-center items-center w-20 h-20 rounded-full bg-[--hero-icon] shadow-md
      "
    >
      <img src={icon} alt={`icon ${title}`} className="w-12 h-12" />
    </div>
  );
};

const Hero = ({ bg, icon, title }) => {
  return (
    <div
      className={`flex flex-col w-full justify-center items-center
        h-[450px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] gap-4
         bg-cover bg-center bg-no-repeat relative`}
      style={{
        backgroundImage: `url('${bg}')`,
      }}
    >
      <div className="flex justify-center z-10">
        <HeroIcon icon={icon} title={title} />
      </div>
      <h1 className="text-3xl font-bold text-center z-10 drop-shadow-sm text-white">
        {title}
      </h1>
      {/* general blur */}
      <div className="absolute inset-0 backdrop-blur-sm" />
      {/* gradiente en los ultimos 10 px */}
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[--bg-main] to-transparent" />
    </div>
  );
};

export default Hero;
