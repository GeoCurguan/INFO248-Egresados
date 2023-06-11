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
        bg-[url('/placeholders/placeholder_hero.svg')] bg-cover bg-center bg-no-repeat"
    >
      <h1 className="text-3xl font-bold text-center">
        Bienvenido a la Red de Egresados
      </h1>
      <section className="sm:flex-row flex flex-col bg-gray-200">
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
        <aside className="sm:w-1/3 flex flex-col w-full px-8 py-4 ">
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
    </div>
  );
};

export default Hero;
