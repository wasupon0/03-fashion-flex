"use client";

import { useRouter } from "next/navigation";

import { CustomButton } from "@/components";
import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/utils";
import { Suspense, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const ShowMore = ({ pageNumber, isNext, isReady }: ShowMoreProps) => {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const handleNavigation = () => {
    // Calculate the new limit based on the page number and navigation type
    setReady(false);
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", newLimit.toString());
    router.push(newPathName, { scroll: false });

    // Update the "limit" search parameter in the URL with the new value
    //setLimit(newLimit);
  };

  useEffect(() => {
    console.log(isReady);
    setReady(isReady);
    console.log(isNext);

    console.log(ready);
  }, [pageNumber]);

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {isNext && ready ? (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-purple rounded-full text-white"
          handleClick={handleNavigation}
        />
      ) : !isNext ? null : (
        <BeatLoader color="#A02BFF" />
      )}
    </div>
  );
};

export default ShowMore;
