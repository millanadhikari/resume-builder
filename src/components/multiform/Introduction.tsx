import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function Introduction({
  handleMulti,

  handleSubmit,
  register,
  errors,
  onSubmit,
}: any) {
  return (
    <div className="mt-10 mx-5 flex flex-col md:items-center">
      <h1 className="text-4xl font-bold text-[#1a91f0]">Add your name </h1>
      <p className="text-md mt-3 md:text-lg">
        You made a great template selection! Now let's add your name to it.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-6 w-full md:w-[500px]">
          <div className="">
            <div className="flex flex-col">
              <label
                className={`text-gray-500 pb-2 ${
                  errors?.firstName?.message && "text-red-500"
                }`}
              >
                First Name
              </label>
              <input
                // value={formData.firstName}
                type="text"
                // name="firstName"
                // onChange={handleChange}
                {...register("firstName", {
                  required: "Firstname is required.",
                  validate: {
                    checkLength: (value: any) => value.length >= 1,
                    // matchPattern: (value: any) =>
                    //   /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                    //     value
                    //   ),
                  },
                })}
                className="bg-blue-50 focus:outline-none py-3 px-3 rounded-md"
              />
              {errors?.firstName && (
                <p className="text-red-500">{errors?.firstName.message}</p>
              )}
            </div>
          </div>
          <div className="mt-6">
            <div className="flex flex-col">
              <label
                className={`text-gray-500 pb-2 ${
                  errors?.lastName?.message && "text-red-500"
                }`}
              >
                Last Name
              </label>
              <input
                // value={formData.firstName}
                type="text"
                // name="lastName"
                // onChange={handleChange}
                {...register("lastName", {
                  required: "Lastname is required.",
                  validate: {
                    checkLength: (value: any) => value.length >= 1,
                    // matchPattern: (value: any) =>
                    //   /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                    //     value
                    //   ),
                  },
                })}
                className="bg-blue-50 focus:outline-none py-3 px-3 rounded-md"
              />
              {errors?.lastName && (
                <p className="text-red-500">{errors?.lastName.message}</p>
              )}
            </div>
          </div>
          <div className="mt-6">
            <div className="flex flex-col">
              <label
                className={`text-gray-500 pb-2 ${
                  errors?.email?.message && "text-red-500"
                }`}
              >
                Email
              </label>
              <input
                // value={formData.firstName}
                type="text"
                // name="email"
                // onChange={handleChange}
                {...register("email", {
                  required: "Email is required.",
                  validate: {
                    checkLength: (value: any) => value.length >= 1,
                    // matchPattern: (value: any) =>
                    //   /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                    //     value
                    //   ),
                  },
                })}
                className="bg-blue-50 focus:outline-none py-3 px-3 rounded-md"
              />
              {errors?.email && (
                <p className="text-red-500">{errors?.email.message}</p>
              )}
            </div>
          </div>

          <div className="flex justify-between w-full md:w-[500px] mt-10">
            {/* <Button
              className="bg-white text-black border-2 hover:border-blue[#1a91f0] hover:text-[#1a91f0]  hover:bg-white border-gray-400 text-lg py-6 font-bold"
              onClick={(e) => handleMulti(e, "back")}
              type="submit"
            >
              Back
            </Button> */}
            <button
              type="submit"
              className="bg-[#1a91f0] text-lg py-3 px-4 rounded-md text-white hover:bg-blue-400 font-bold hover:bg-blue-6s00"
              // onClick={handleSubmit(onSubmit)}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Introduction;
