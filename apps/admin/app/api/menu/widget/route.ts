// app/api/menu/widget/route.ts
import { NextResponse } from "next/server";

export function GET() {
  const widgetMenu = {
    id: "widget",
    title: "widget",
    type: "group",
    icon: "widget",
    children: [
      {
        id: "statistics",
        title: "statistics",
        type: "item",
        icon: "statistics",
        url: "/widget/statistics",
      },
      {
        id: "data",
        title: "data",
        type: "item",
        icon: "data",
        url: "/widget/data",
      },
      {
        id: "chart",
        title: "chart",
        type: "item",
        icon: "chart",
        url: "/widget/chart",
      },
    ],
  };

  return NextResponse.json(widgetMenu);
}
