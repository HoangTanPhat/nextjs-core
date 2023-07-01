import React from "react";

type BlogItemSkeletonProps = {
  directionRow?: boolean;
};
export default function BlogItemSkeleton({
  directionRow,
}: BlogItemSkeletonProps) {
  if (directionRow)
    return (
      <div className="flex xs:flex-col sm:flex-row justify-between">
        <div className="flex flex-row gap-6">
          <div className="relative xs:h-full sm:h-[150px] xs:aspect-[4/2.5] sm:aspect-[4/3] z-10">
            <div className="animate-pulse h-full w-full bg-slate-200"></div>
          </div>
          <div className="h-5 w-[200px] animate-pulse bg-slate-200 rounded-full"></div>
        </div>
        <div className="h-5 w-10 animate-pulse bg-slate-200 rounded-full"></div>
      </div>
    );
  return <div className="relative aspect-[4/2.5]">Hello</div>;
}
