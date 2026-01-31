import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const { fullName, email, phone, suburb, situation } = data;
    if (!fullName || !email || !phone || !suburb || !situation) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log("New lead received:", {
      fullName,
      email,
      phone,
      suburb,
      situation,
      brokerName: data.brokerName || null,
      brokerage: data.brokerage || null,
      contactTime: data.contactTime || null,
      marketUpdates: data.marketUpdates ?? true,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with CRM (HubSpot, Salesforce)
    // TODO: Send confirmation email via Resend or SendGrid
    // TODO: If broker referral, send notification to broker
    // TODO: Send notification to Innogreen Homes team

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
