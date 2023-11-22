import axios from "axios";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await axios.get("http://localhost:4000/students");

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[ORDER_GET]", error);
    return new NextResponse("Erro interno do servidor!", { status: 500 });
  }
}
