"use client";

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { Color, Size } from "@/types";
import Button from "@/components/ui/button";

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

export const Filter: React.FC<FilterProps> = ({ valueKey, name, data }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedvalue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      delete query[valueKey];
    }

    const queryString = qs.stringify(query, { skipNull: true });

    const url = `${window.location.pathname}?${queryString}`;

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                selectedvalue === filter.id && "bg-black text-white"
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
