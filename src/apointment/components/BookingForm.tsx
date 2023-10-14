import { AiFillCar, AiOutlineCalendar } from "react-icons/ai";
import { BiChild } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const schema = z.object({
  destination: z
    .string()
    .min(5, { message: "Destination must be at least 5 characters" })
    .max(100, { message: "Destination must be maximum 100 characters" }),
  date: z.date({ errorMap: () => ({ message: "Date must be valid" }) }),
  children: z
    .number({ invalid_type_error: "Children must be number" })
    .min(0, { message: "Children must be at least 0" }),
  adult: z
    .number({ invalid_type_error: "Adult must be number" })
    .min(0, { message: "Adult must be at least 0" }),
});

type BookingFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: BookingFormData) => void;
}

const BookingForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({ resolver: zodResolver(schema) });

  return (
    <div className="">
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
        action=""
        className=""
      >
        <div className="bg-gradient-to-r from-indigo-500 p-32 flex flex-col md:flex-row justify-center gap-4 px-12">
          <div className="relative">
            <span className="absolute top-[18px] left-4 text-orange-400">
              <AiFillCar />
            </span>
            <input
              {...register("destination")}
              className="rounded-lg pl-10 pr-3 py-3 outline-none"
              type="text"
              placeholder="Where are you going?"
            />
            {errors.destination && (
              <p className="text-black-400 mt-3 font-semibold">
                {errors.destination.message}
              </p>
            )}
          </div>
          <div className="relative">
            <span className="absolute top-[18px] left-4 text-orange-400">
              <AiOutlineCalendar />
            </span>
            <input
              {...register("date", { valueAsDate: true })}
              className="rounded-lg pl-10 pr-3 py-3 outline-none"
              type="datetime-local"
              placeholder="Where are you going?"
            />
            {errors.date && (
              <p className="text-black-400 mt-3 font-semibold">
                {errors.date.message}
              </p>
            )}
          </div>
          <div className="relative">
            <span className="absolute top-[15px] left-4 text-orange-400 text-xl">
              <BiChild />
            </span>
            <input
              {...register("children", { valueAsNumber: true })}
              type="number"
              className="rounded-lg pl-10 pr-3 py-3 outline-none"
              placeholder="Children"
              min={0}
            />
            {errors.children && (
              <p className="text-black-400 mt-3 font-semibold">
                {errors.children.message}
              </p>
            )}
          </div>
          <div className="relative">
            <span className="absolute top-[15px] left-4 text-orange-400 text-xl">
              <BsPeople />
            </span>
            <input
              {...register("adult", { valueAsNumber: true })}
              type="number"
              className="rounded-lg pl-10 pr-3 py-3 outline-none"
              placeholder="Adult"
              min={0}
            />
            {errors.adult && (
              <p className="text-black-400 mt-3 font-semibold">
                {errors.adult.message}
              </p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="bg-orange-400 px-4 py-3 rounded-lg text-white font-semibold cursor-pointer"
            >
              Book Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
