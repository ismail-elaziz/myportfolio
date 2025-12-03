"use client";

export const SkeletonCard = () => (
  <div className="animate-pulse bg-gray-800/50 rounded-lg p-6 space-y-4">
    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
    <div className="h-4 bg-gray-700 rounded w-1/2"></div>
    <div className="h-32 bg-gray-700 rounded"></div>
  </div>
);

export const SkeletonProject = () => (
  <div className="animate-pulse bg-gray-800/50 rounded-lg overflow-hidden">
    <div className="h-48 bg-gray-700"></div>
    <div className="p-6 space-y-3">
      <div className="h-6 bg-gray-700 rounded w-3/4"></div>
      <div className="h-4 bg-gray-700 rounded"></div>
      <div className="h-4 bg-gray-700 rounded w-5/6"></div>
    </div>
  </div>
);

export const SkeletonCertification = () => (
  <div className="animate-pulse bg-gray-800/50 rounded-lg overflow-hidden">
    <div className="aspect-[16/9] bg-gray-700"></div>
    <div className="p-4 space-y-2">
      <div className="h-5 bg-gray-700 rounded w-3/4"></div>
      <div className="h-3 bg-gray-700 rounded w-1/2"></div>
    </div>
  </div>
);

export const SkeletonActivity = () => (
  <div className="animate-pulse bg-gray-800/50 rounded-lg p-6 space-y-4">
    <div className="h-8 bg-gray-700 rounded w-1/2"></div>
    <div className="aspect-[16/9] bg-gray-700 rounded"></div>
    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
  </div>
);

export const SkeletonAbout = () => (
  <div className="animate-pulse space-y-6">
    <div className="h-10 bg-gray-700 rounded w-1/3 mx-auto"></div>
    <div className="space-y-3">
      <div className="h-4 bg-gray-700 rounded"></div>
      <div className="h-4 bg-gray-700 rounded"></div>
      <div className="h-4 bg-gray-700 rounded w-5/6"></div>
    </div>
  </div>
);
