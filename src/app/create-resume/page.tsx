"use client";
import Introduction from "@/components/multiform/Introduction";
import Main from "@/components/multiform/Main";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function Page() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const [formData, setFormData] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleMulti = (e: any, title?: any) => {
    if (title == "front") {
      setStep(step + 1);
    } else if (title == "back") {
      setStep(step - 1);
    }
  };

  const onSubmit = (data: any) => {
    const { firstName, lastName, email } = data;
    console.log(data);
    router.push('/resumes/989898/edit')
  };

  const doneStep2 =
    watch("firstName") && watch("lastName") && watch("email") !== "";

  return (
    <div>
      <div className="hidden md:flex gap-4 items-center justify-center">
        <div className="flex gap-3 items-center">
          <div className="flex items-center justify-center bg-blue-500 text-white rounded-full h-8 w-8  text-center">
            1
          </div>
          <h2 className="text-lg">Choose template</h2>
          <div className="border-2 w-10"></div>
        </div>
        <div className="flex gap-3 items-center">
          <div
            className={`
             ${
               !doneStep2 ? "bg-gray-300 text-gray-600" : "bg-blue-500"
             } flex items-center justify-center  text-white rounded-full h-8 w-8 text-center font-semibold`}
          >
            2
          </div>
          <h2 className={`${!doneStep2 && "text-gray-400"} text-lg`}>
            Enter your details
          </h2>
          <div className="border-2 w-10"></div>
        </div>
        <div className="flex gap-3 items-center">
          <div
            className={`
             
               bg-gray-300 text-gray-600 flex items-center justify-center  rounded-full h-8 w-8 text-center font-semibold`}
          >
            3
          </div>
          <h2 className="text-lg">Download Resume</h2>
        </div>
      </div>
      <div>
        {/* <button onClick={(e) => handleMulti(e, "front")} type="submit">
          Next
        </button> */}
        {/* Render form fields based on current step */}
        {step === 1 && (
          <div>
            Choose Template
            <button onClick={(e) => handleMulti(e, "front")}>Next</button>
          </div>
        )}

        {step === 2 && (
          <>
            <Main handleMulti={handleMulti} />
          </>
        )}
        {step === 3 && (
          <>
            <Introduction
              handleMulti={handleMulti}
              handleSubmit={handleSubmit}
              register={register}
              errors={errors}
              onSubmit={onSubmit}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Page;
