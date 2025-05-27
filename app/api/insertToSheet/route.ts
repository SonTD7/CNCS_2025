import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Gửi tiếp dữ liệu lên Google Sheets
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbx_lUCEWDaTYo2nllBpi9C6HKwDzR8YN5gdLuV7RQ2zcanw-p5M_hMwtgKdMBcGKwA/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: "Gửi lên Google Sheets thất bại", details: errorText },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Gửi dữ liệu thành công" });
  } catch (error) {
    return NextResponse.json(
      { error: "Lỗi server", details: error },
      { status: 500 }
    );
  }
}
