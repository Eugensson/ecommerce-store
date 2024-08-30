"use client";

import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import useCart from "@/hooks/use-cart";
import Button from "@/components/ui/button";

export const NavbarActions = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center gap-x-2 rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} className="text-white" />
        <span className="ml-2 text-sm text-white font-medium">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};
