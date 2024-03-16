import Container from "@/components/ui/Container";
import Title from "@/components/ui/Title";
import React from "react";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const PlayGround = async () => {
  const PostData = await getData();
  console.log(PostData);

  return;
  <Container>
    <Title title="Play Ground" />
  </Container>;
};

export default PlayGround;
