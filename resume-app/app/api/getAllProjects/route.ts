import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("resume");
    const projects = await db.collection("projects").find({}).toArray();
    if (!projects) {
      return NextResponse.json(
        { error: "Didnt find any data" },
        { status: 404 }
      );
    }
    return NextResponse.json(projects);
  } catch (err) {
    return NextResponse.json(
      { error: "Database Error" + err },
      { status: 500 }
    );
  }
}
