import Posts from "@/components/Posts";
import Container from "@/components/ui/Container";
import Title from "@/components/ui/Title";

import React from "react";

const getData = async () => {
  const res = await fetch("https://json-placeholder-six.vercel.app/api/posts");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Playground = async () => {
  const PostData = await getData();
  console.log(PostData);

  return (
    <Container>
      <Title title="This is Playground" />
      <div className=" my-5 flex items-center gap-5">
        <button className=" bg-black text-gray-200 text-sm font-semibold py-2 px-4 rounded-md hover:bg-black/80 hover:text-white duration-200">
          Posts
        </button>
        <button className=" bg-black text-gray-200 text-sm font-semibold py-2 px-4 rounded-md hover:bg-black/80 hover:text-white duration-200">
          Comments
        </button>
      </div>
      <Posts PostData={PostData} />
    </Container>
  );
};

export default Playground;
