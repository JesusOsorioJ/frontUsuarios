"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface FormData {
  email?: string;
  first_name?: string;
}

interface FilterTasksProps {
  setFilter: (filter: string) => void;
  totalItems: number;
}

export default function FilterTasks({
  setFilter,
  totalItems,
}: FilterTasksProps) {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    let result = Object.entries(formData)
      .filter(([, value]) => value !== "")
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    result = result.trim() !== "" ? result.replace("+", "\\%2B") : result;
    setFilter(result);
  };

  return (
    <div className="flex flex-col gap-2 bg-gray-200 rounded-md px-[30px] py-[20px]">
      <p className="text-center w-full uppercase">
        {t("filter")}: {t("totalItems")} {totalItems}
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex h-fit w-full  items-center gap-[20px] flex-wrap"
      >
       <div>
          <p className="capitalize">{t("email")}</p>
          <input
            {...register("email")}
            placeholder="Example@..."
            className="w-full rounded-md p-3 bg-gray-300 text-black focus:outline-none"
          />
        </div>

        <div>
          <p className="capitalize">{t("name")}</p>
          <input
            {...register("first_name")}
            placeholder="George..."
            className="w-full rounded-md p-3 bg-gray-300 text-black focus:outline-none"
          />
        </div>

        <div className="flex flex-col items-center justify-between gap-[10px] pt-[20px] sm:flex-row">
          <button
            type="button"
            onClick={() => location.reload()}
            className="w-full uppercase bg-[#b1b1b1] rounded-lg px-[20px] py-[6px] sm:w-fit"
          >
            {t("reset")}
          </button>
          <button className="w-full uppercase rounded-lg bg-white px-[20px] py-[6px] sm:w-fit">
            {t("search")}
          </button>
        </div>
      </form>
    </div>
  );
}
