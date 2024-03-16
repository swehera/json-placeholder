import { postData } from "@/constant";
import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({
    message: "OK DONE",
    status: 200,
    data: postData,
  });
};
