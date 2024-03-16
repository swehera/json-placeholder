import Container from "@/components/ui/Container";
import Title from "@/components/ui/Title";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <Container className="flex flex-col justify-center py-20 items-center">
      <Title title="404 NOT FOUND" />
      <div className=" mt-5">
        <Link
          href={"/"}
          className=" bg-black text-gray-200 text-sm font-semibold py-2 px-4 rounded-md hover:bg-black/80 hover:text-white duration-200"
        >
          Back Home
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;
