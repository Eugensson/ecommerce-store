"use client";

import Image from "next/image";
import { X } from "lucide-react";

import { Product } from "@/types";
import useCart from "@/hooks/use-cart";
import { Currency } from "@/components/ui/currency";
import { IconButton } from "@/components/ui/icon-button";

interface CartItemProps {
  data: Product;
}

export const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <>
      <div className="relative w-24 h-24 rounded-md overflow-hidden sm:w-48 sm:h-48">
        <Image
          src={data.images?.[0].url}
          alt={data.name}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 top-0 right-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color?.name}</p>
            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4 ">
              {data.size?.name}
            </p>
          </div>
          <Currency value={data?.price} />
        </div>
      </div>
    </>
  );
};
