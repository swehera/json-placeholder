import { albumsData } from "@/constant";
import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({
    data: albumsData,
  });
};
