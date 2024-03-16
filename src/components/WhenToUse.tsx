import Container from "./ui/Container";
import Title from "./ui/Title";

const WhenToUse = () => {
  return (
    <Container>
      <Title title="When to use" />
      <p className=" text-sm mt-5 tracking-wide leading-6">
        JSONPlaceholder is a free online REST API that you can use{" "}
        <span className=" font-bold">whenever you need some fake data</span>. It
        can be in a README on GitHub, for a demo on CodeSandbox, in code
        examples on Stack Overflow, ...or simply to test things locally.
      </p>
    </Container>
  );
};

export default WhenToUse;
