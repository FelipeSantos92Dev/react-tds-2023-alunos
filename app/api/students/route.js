import axios from "axios";

import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  try {
    const response = await axios.get("http://localhost:5003/students");

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[ORDER_GET]", error);
    return new NextResponse("Erro interno do servidor!", { status: 500 });
  }
}
 
export async function POST(NextRequest) {
  const request = await NextRequest.json();

  const { name, age } = request;
  console.log(name, age);
  try {
    const response = await axios.post(
      "http://localhost:5003/students",
      request
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[ORDER_POST]", error);
    return new NextResponse("Erro interno do servidor!", { status: 500 });
  }
}
