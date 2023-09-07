import { NextResponse } from "next/server";
import { SiweMessage } from "siwe";

export async function POST(request: Request) {
  const { message, signature, nonce } = await request.json();
  const siweMessage = new SiweMessage(message);

  const domain = "localhost:3000";

  try {
    // TODO: データストアに保存していたnonceを削除する

    const result = await siweMessage.verify({ signature, domain, nonce });
    console.log("result", result);
    if (!result.success) {
      return NextResponse.json({ error: "TODO: エラー" }, { status: 401 });
    }

    // ユーザー登録処理や、ログイン処理をしたり
    // 例えば、walletAddressでDBからuserを取得したり
    // const address = result.data.address;
    // const user = ...

    return NextResponse.json(result.data);
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ error: "TODO: エラー" }, { status: 401 });
  }
}
