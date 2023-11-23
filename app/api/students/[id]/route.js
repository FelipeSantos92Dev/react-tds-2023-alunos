import axios from "axios";

import { NextResponse } from "next/server";

const url = process.env.BASE_URL + "students";

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const response = await axios.get(`${url}/${id}`);

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[ORDER_GET]", error);
    return new NextResponse("Erro interno do servidor!", { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const { id } = params;
  const body = await request.json();

  try {
    const response = await axios.put(`${url}/${id}`, body);

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[ORDER_PUT]", error);
    return new NextResponse("Erro interno do servidor!", { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;
  try {
    const response = await axios.delete(`${url}/${id}`);

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[ORDER_DELETE]", error);
    return new NextResponse("Erro interno do servidor!", { status: 500 });
  }
}
