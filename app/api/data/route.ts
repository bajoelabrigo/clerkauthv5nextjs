import { connect } from "@/db";
import { auth, currentUser } from "@clerk/nextjs/server";

import { NextResponse } from "next/server";

export async function GET() {
  
  const { userId } = auth();
  const user = await currentUser();
 
  

  if (!userId ||!user) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  return NextResponse.json(
    {
      message: "Autenticated",
      data: { userId: userId, username: user?.username },
    },
    { status: 200 }
  );
}
