import { NextResponse } from "next/server";
import { updateAllProductsWithCategoryName } from "@/app/(universal)/action/dbUpdates/dbOperation";

export async function POST() {
  console.log("products upated------------------")
  const result = await updateAllProductsWithCategoryName();
  return NextResponse.json(result);
}
