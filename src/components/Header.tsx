import Link from "next/link";
import Container from "./ui/Container";
import Logo from "./ui/Logo";

const Header = () => {
  const navigationArray = [
    {
      title: "Guide",
      link: "/guide",
    },
    {
      title: "Sponsor this project",
      link: "/sponsar",
    },
    {
      title: "Blog",
      link: "/blog",
    },

    {
      title: "My JSON Server",
      link: "/json-server",
    },
    {
      title: "Playground",
      link: "/playground",
    },
  ];
  return (
    <div className=" border-b-[1px] border-b-gray-300 sticky top-0 z-50 bg-white">
      <Container className=" flex flex-col md:flex-row items-start md:items-center justify-between ">
        <Logo />
        <div className=" flex items-center gap-x-2 md:gap-x-5">
          {navigationArray.map((item) => (
            <Link
              key={item?.title}
              href={item?.link}
              className=" text-[11px] md:text-[16px] font-light hover:text-blue-600"
            >
              {item?.title}
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Header;
