"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-4xl font-bold">Workshop SUI - Frontend</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <span>Start Here!</span>
      </CardContent>
    </Card>
  )
};
