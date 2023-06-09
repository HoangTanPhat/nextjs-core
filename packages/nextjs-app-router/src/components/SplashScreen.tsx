"use client";
import React from "react";
import { useLottie } from "lottie-react";
import loading from "../../public/json/loading.json";

export default function SplashScreen() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
  };
  const { View } = useLottie(defaultOptions);

  return (
    <div className="w-screen h-screen">
      <div className="absolute top-1/2 left-1/2 w-36 h-36 -translate-y-1/2 -translate-x-1/2">
        {View}
      </div>
    </div>
  );
}
