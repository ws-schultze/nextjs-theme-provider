"use client";

import { useRouter } from "next/navigation";
import PrimaryBtn from "./primary-btn";
import { IoArrowBack } from "react-icons/io5";

export default function GoBackButton() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <PrimaryBtn onClick={handleGoBack}>
      <IoArrowBack />
      Go Back
    </PrimaryBtn>
  );
}
