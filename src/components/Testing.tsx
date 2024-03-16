"use client";
import React, { useState } from "react";
import Container from "./ui/Container";
import Title from "./ui/Title";
import { log } from "console";

const Testing = () => {
  const [test, setTest] = useState(false);
  console.log(test);

  return (
    <Container>
      <Title title="Try it" />
      <p className=" my-5">
        Run this code here, in a console or from any site:
      </p>
      <div className=" bg-[#263E52] p-10 rounded-md w-full">
        <p className=" text-yellow-100 tracking-wider mb-0.5">
          <span className=" text-sky-400 ">fetch</span>
          &#x27;{`(https://jsonplaceholder.typicode.com/todos/1)`}&#x27;
        </p>
        <p className="text-gray-100 tracking-wider ml-10 mb-0.5">
          <span className=" text-sky-400">.then</span>
          {`(response => response.`}
          <span className="text-sky-400">json</span>
          {`())`}
        </p>
        <p className="text-gray-100 tracking-wider ml-10 mb-0.5">
          <span className=" text-sky-400">.then</span>
          {`(json => console.`}
          <span className="text-sky-400">log</span>
          {`(json))`}
        </p>
      </div>
      <button
        onClick={() => setTest(true)}
        className=" my-5 bg-black text-gray-200 text-sm font-semibold py-2 px-4 rounded-md hover:bg-black/80 hover:text-white duration-200"
      >
        Run script
      </button>
      <div className="bg-[#263E52] p-10 rounded-md w-full">
        {test ? (
          <div>
            <p className=" tracking-wider text-gray-100">{`{`}</p>
            <p className=" text-red-500 tracking-wider">
              {`"userID"`}
              <span className=" text-gray-100">: </span>
              <span className=" text-purple-400">1</span>
              <span className=" text-gray-100">,</span>
            </p>
            <p className=" text-red-500 tracking-wider">
              {`"id"`}
              <span className=" text-gray-100">: </span>
              <span className=" text-purple-400">1</span>
              <span className=" text-gray-100">,</span>
            </p>
            <p className=" text-red-500 tracking-wider">
              {`"title"`}
              <span className=" text-gray-100">: </span>
              <span className=" text-gray-100">{`"delectus aut autem"`}</span>
              <span className=" text-gray-100">,</span>
            </p>
            <p className=" text-red-500 tracking-wider">
              {`"title"`}
              <span className=" text-gray-100">: </span>
              <span className=" text-purple-400">{`false`}</span>
            </p>
            <p className=" tracking-wider text-gray-100">{`}`}</p>
          </div>
        ) : (
          <p className=" tracking-wider text-gray-100">{`{}`}</p>
        )}
      </div>
      {test && (
        <p className=" font-medium mt-5">
          Congrats! You&apos;ve made your first call to JSONPlaceholder. 😃 🎉
        </p>
      )}
    </Container>
  );
};

export default Testing;
