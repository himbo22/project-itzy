'use client'
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import React from 'react';
const ButtonState = () => {
  const pathname = usePathname();
  return (
    <div className="w-full top-20 right-6 bg-blue-500 justify-center">
      <div></div>


    </div>
  )
}

export default ButtonState