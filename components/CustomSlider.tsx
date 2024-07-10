"use client";
import { CustomSliderProps } from "@/types";

import { updateSearchParamsTwo } from "@/utils";
import { Slider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";

export default function CustomSlider({
  min_name,
  max_name,
}: CustomSliderProps) {
  const router = useRouter();
  const [selectedRange, setSelectedRange] = useState<number | number[]>([
    10, 300,
  ]); // State for storing the selected min max range

  const handleUpdateParamsMinMax = (e: number[]) => {
    const newPathName = updateSearchParamsTwo(
      min_name,
      e[0].toString(),
      max_name,
      e[1].toString()
    );
    router.push(newPathName, { scroll: false });
  };

  // https://api.escuelajs.co/api/v1/products/?title=&price_min=1&price_max=10000&categoryId=0&offset=&limit=10

  return (
    <Slider
      label="Price Range"
      color="secondary"
      step={10}
      minValue={10}
      maxValue={300}
      defaultValue={selectedRange}
      formatOptions={{ style: "currency", currency: "USD" }}
      className="max-w-md"
      onChange={(e) => {
        setSelectedRange(e); // Update the selected range in state
        if (Array.isArray(e)) {
          handleUpdateParamsMinMax(e); // Ensure e is of type number[] before calling handleUpdateParamsMinMax
        }
      }}
    />
  );
}
