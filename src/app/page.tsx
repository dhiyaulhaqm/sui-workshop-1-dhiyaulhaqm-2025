"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WalletConnection } from "@/components/WalletConnection";
import { Wallet } from "lucide-react";
import Balance from "@/components/Balance";
import Faucet from "@/components/transaction/Faucet";
import Escrow from "@/components/transaction/Escrow";
import ListMyEscrow from "@/components/transaction/ListMyEscrow";


export default function page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-4xl font-bold">
          Workshop SUI - Frontend
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <span>Start Here!</span>
        <WalletConnection />
        <Balance />
        <Faucet/>
        <Escrow/>
        <ListMyEscrow/>


      </CardContent>
    </Card>
  );
}
