import Link from "next/link";

export const HeroIcon = ({ icon, link }) => {
  return (
    <Link href={link}>
      <img src={icon} alt="icon" className="w-12 h-12" />
    </Link>
  );
};

export const icons = [
  {
    icon: "/icons/social_media/icons8-facebook.svg",
    link: "https://www.facebook.com/",
  },
  {
    icon: "/icons/social_media/icons8-instagram.svg",
    link: "https://www.instagram.com/",
  },
  {
    icon: "/icons/social_media/icons8-youtube.svg",
    link: "https://www.youtube.com/",
  },
];

const Hero = () => {
  return (
    <div
      className="flex flex-col w-full justify-evenly
        h-[450px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]
        bg-[url('/placeholders/placeholder_hero.svg')] bg-cover bg-center bg-no-repeat relative"
    >
      <h1 className="text-3xl font-bold text-center z-10">
        Bienvenido a la Red de Egresados
      </h1>

      <section className="sm:flex-row flex flex-col bg-gray-200 z-10 backdrop-filter backdrop-blur-sm bg-opacity-75">
        {/* 2/3 on desktop*/}
        <article className="sm:w-2/3 md:pr-8 md:pl-8 w-full px-8 py-4 ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            nemo officiis laboriosam totam ullam ut magnam autem, esse cum
            repudiandae. Corrupti eaque facere repellat autem cupiditate quae
            voluptate doloremque nesciunt!
          </p>
        </article>
        {/* 1/3 on desktop */}
        <aside className="sm:w-1/3 flex flex-col w-full px-8 py-4 z-10">
          <div>
            <p>
              <b className="text-[--primary]">Redes Sociales</b>
            </p>
          </div>
          <div>
            <div className="flex flex-row justify-around items-center">
              {icons.map((icon, index) => (
                <HeroIcon key={index} icon={icon.icon} link={icon.link} />
              ))}
            </div>
          </div>
        </aside>
      </section>
      {/* bg white opacity*/}
      <div className="absolute inset-0 bg-white opacity-10" />
    </div>
  );
};

export default Hero;
