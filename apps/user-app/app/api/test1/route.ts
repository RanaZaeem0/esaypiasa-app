import { NextResponse } from "next/server";
import { PrismaClient } from "@repo/db";

// Initialize Prisma Client
const client = new PrismaClient();

export const GET = async () => {
    try {
        // Creating a new user
        const user = await client.user.create({
            data: {
                email: "asd",  // You might want to check if this is a valid email or unique
                name: "adsads"
            }
        });

        // Return response
        return NextResponse.json({
            message: "User created successfully",
            user: user // Optionally include user data in response
        });

    } catch (error) {
        // Handle any error from Prisma or other parts of the code
        console.error("Error creating user:", error);

        // Return error response
        return NextResponse.json({
            message: "Error creating user",
            error: error.message || "Unknown error"
        }, { status: 500 });
    } finally {
        // Always ensure the client is disconnected gracefully
        await client.$disconnect();
    }
};
