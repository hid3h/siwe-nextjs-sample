import { NextResponse } from "next/server";
import { generateNonce } from "siwe";

export async function POST() {
  const nonce = generateNonce();

  // TODO: nonceをRDBやKVSなどのデータストアに保存する

  return NextResponse.json({ nonce });
}
