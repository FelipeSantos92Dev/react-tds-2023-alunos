import axios from "axios";

import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/timezone",
    headers: {
      "X-RapidAPI-Key": "c6103dd9a3msh28dee0019c0ecebp1080d8jsn2b5e8bab22c8",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };
  try {
    const config = {
      method: "GET",
      maxBodyLength: Infinity,
      url: "https://api-football-v1.p.rapidapi.com/v3/timezone",
      headers: {
        "X-RapidAPI-Key": "c6103dd9a3msh28dee0019c0ecebp1080d8jsn2b5e8bab22c8",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };

    const response = await axios(config);

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[ORDER_GET]", error);
    return new NextResponse("Erro interno do servidor!", { status: 500 });
  }
}
