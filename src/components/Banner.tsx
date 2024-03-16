import Container from "./ui/Container";

const Banner = () => {
  return (
    <Container className="py-20 flex flex-col gap-y-5">
      <h1 className=" text-6xl mb-10 text-gray-700">{`{JSON} Placeholder`}</h1>
      <p className=" text-2xl text-gray-600">
        Free fake and reliable API for testing and prototyping.
      </p>
      <p className=" text-2xl text-gray-600">
        Powered by <span className=" underline text-gray-800">JSON Server</span>{" "}
        + <span className=" underline text-gray-800">LowDB</span>.
      </p>
      <p className=" text-gray-800 font-bold mt-4">
        Serving ~3 billion requests each month.
      </p>
    </Container>
  );
};

export default Banner;
