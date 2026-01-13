import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { getCurrentUser } from "@/lib/admin/current-user";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  try {
    const currentUser = await getCurrentUser();

    // Only admin can update user roles
    if (!currentUser || currentUser.role == "user" || currentUser.role == "moderator") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { userId, role } = body;

    if (!userId || !role) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    if (role !== "admin" && role !== "moderator" && role !== "user") {
      return new NextResponse("Invalid role", { status: 400 });
    }

    const [updatedUser] = await db
      .update(users)
      .set({ role })
      .where(eq(users.id, userId))
      .returning();

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("[USER_ROLE_UPDATE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
