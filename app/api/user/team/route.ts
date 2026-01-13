import { connection, NextResponse } from "next/server";
import { db } from "@/db";
import { teamMembers, teams, users, eventRegistrations } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import { auth } from "@/lib/auth";

export async function GET() {
  await connection(); 
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const userId = session.user.id;

    // Get team member details
    const memberRecord = await db.query.teamMembers.findFirst({
      where: eq(teamMembers.userId, userId),
    });

    if (!memberRecord) {
      return NextResponse.json({ team: null });
    }

    // Get team details
    const team = await db.query.teams.findFirst({
      where: eq(teams.id, memberRecord.teamId),
    });

    if (!team) {
      return NextResponse.json({ team: null });
    }

    // Get all team members
    const members = await db
      .select({
        userId: users.id,
        userName: users.name,
        userEmail: users.email,
        userImage: users.image,
        role: teamMembers.role,
      })
      .from(teamMembers)
      .innerJoin(users, eq(teamMembers.userId, users.id))
      .where(eq(teamMembers.teamId, team.id));

    // Get events joined count
    const eventsJoinedCount = await db
      .select({ count: sql<number>`count(*)` })
      .from(eventRegistrations)
      .where(eq(eventRegistrations.teamId, team.id));

    const eventsJoined = eventsJoinedCount[0]?.count || 0;

    const rankResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(teams)
      .where(sql`${teams.score} > ${team.score}`);

    const rank = (rankResult[0]?.count || 0) + 1;

    return NextResponse.json({
      team: {
        ...team,
        members,
        userRole: memberRecord.role,
        eventsJoined,
        rank,
      },
    });
  } catch (error) {
    console.error("[GET_USER_TEAM]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
