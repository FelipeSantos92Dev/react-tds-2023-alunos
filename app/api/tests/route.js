import axios from "axios";

import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/teams?id=24",
    headers: {
      "X-RapidAPI-Key": "c6103dd9a3msh28dee0019c0ecebp1080d8jsn2b5e8bab22c8",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };
  try {
    const config = {
      method: "GET",
      maxBodyLength: Infinity,
      url: "https://api.rawg.io/api/games?key=2014ca8f1ab34906952da5f330744b55",
    };

    const response = await axios(options);

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[ORDER_GET]", error);
    return new NextResponse("Erro interno do servidor!", { status: 500 });
  }
}
