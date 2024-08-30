import Image from "next/image";
import { Tab } from "@headlessui/react";

import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";

interface GalleryTabProps {
  image: ImageType;
}

export const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative flex justify-center items-center aspect-square cursor-pointer rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute w-full h-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              src={image.url}
              alt="Product Image"
              fill
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
};
