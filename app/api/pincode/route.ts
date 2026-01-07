import { NextResponse } from "next/server";

const SERVICEABLE_STATES = {
  rajasthan: [/^30\d{4}$/],
  gujarat: [/^36\d{4}$/],
  maharashtra: [/^40\d{4}$/, /^41\d{4}$/, /^42\d{4}$/, /^43\d{4}$/],
};

export async function POST(req: Request) {
  const { pincode } = await req.json();

  if (!pincode || !/^\d{6}$/.test(pincode)) {
    return NextResponse.json({
      success: false,
      message: "Invalid pincode",
    });
  }

  const isServiceable = Object.values(SERVICEABLE_STATES).some((patterns) =>
    patterns.some((regex) => regex.test(pincode))
  );

  if (isServiceable) {
    return NextResponse.json({
      success: true,
      message: "✅ Delivery available at this pincode",
    });
  }

  return NextResponse.json({
    success: false,
    message: "❌ Sorry, delivery not available in your area yet",
  });
}
