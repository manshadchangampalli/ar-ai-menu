import { NextRequest } from "next/server";

export default async function proxy(request: NextRequest) {
  console.log("🚀 ~ proxy ~ request:", request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
