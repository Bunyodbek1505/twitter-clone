"use client"

import React, { useCallback } from "react";
import Image from "next/image";
import Button from "../ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";
import useRegisterModal from "@/hooks/useRegisterModal";
import RegistorModal from "../modals/registorModal";

const Auth = () => {

  const registerModal = useRegisterModal()

  const onOpenRegistorModal = useCallback(() => {
    registerModal.onOpen();
  }, [registerModal])


  return (
    <>
      <RegistorModal/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-screen">
      <Image
        src={"/x.png"}
        width={550}
        height={550}
        alt="X"
        className="justify-self-center hidden md:block"
      />

      <div className="flex flex-col justify-ceter md:justify-between h-full gap-6 md:h-[70vh]">
        <div className="block md:hidden ">
          <Image
            src={"/x.png"}
            width={50}
            height={50}
            alt="X"
            className="w-36"
          />
        </div>
        <h1 className="text-6xl font-bold">Happening now</h1>
        <div className="w-full md:w-[60%]">
          <h2 className="font-bold text-3xl mb-4">Join Today</h2>
          <div className="flex flex-col space-y-3">
            <Button
              label={
                <div className="flex gap-2 items-center justify-center">
                  <FaGoogle />
                  Sign up width google
                </div>
              }
              fullWidth
              secondary
            />
            <Button
              label={
                <div className="flex gap-2 items-center justify-center">
                  <FaGithub />
                  Signup width Github
                </div>
              }
              fullWidth
              secondary
            />
            <div className="flex items-center justify-center">
              <div className="h-px bg-gray-700 w-1/2" />
              <p className="mx-4"> or </p>
              <div className="h-px bg-gray-700 w-1/2" />
            </div>
            <Button label={"Create account"} fullWidth  onClick={onOpenRegistorModal}/>
            <div className="text[10px] text-gray-400">
              By signing up, you agree to the{" "}
              <span className="text-sky-500">Terms of Servise</span> and
              <span className="text-sky-500"> Privicy Policy</span>, including
              <span className="text-sky-500"> Cooking Use</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[60%]">
          <h3 className="font-medium text-xl mb-4">Alerady have an account?</h3>
          <Button label={"Sign in"} fullWidth outline />
          
        </div>
      </div>
      </div>
    </>
  );
};

export default Auth;
