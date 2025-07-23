import { useTranslation } from "react-i18next";
import { newItem, updateItem } from "../api/item";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Item } from "../pages/Tasks";
import { useEffect } from "react";

interface Props {
  form: Item;
  setForm: (item: Item) => void;
  setSend: (status: boolean) => void;
}

const CreateItem = ({ form, setForm, setSend }: Props) => {
  const { t } = useTranslation();
  const { register, handleSubmit, reset } = useForm<Item>({
    defaultValues: form,
  });

   useEffect(() => {
    if (form.email) {
      reset({
        ...form,
      });
    }
  }, [form, reset]);

  const onSubmit: SubmitHandler<Item> = async (formData) => {
    try {
      setSend(true);
      let response;

      const payload = {
        name: formData.name,
        job: formData.job,
      };

      if (form.id) {
        response = await updateItem(form.id, payload);
      } else {
        response = await newItem(payload);
      }

      if (response && (response.status === 200 || response.status === 201)) {
        reset({});
      } else {
        Swal.fire(t("error"), t("taskFailed"), "error");
      }
    } catch {
      Swal.fire(t("error"), t("taskError"), "error");
    } finally {
      setForm({} as Item);
      setSend(false);
    }
  };

  return (
    <div className="flex flex-col gap-2 items-center bg-gray-200 w-full p-5 rounded-lg">
      <p className="uppercase">
        {form.id ? `${t("editTask")} ${form.id}` : t("createRegister")}
      </p>
      {form.email ?? ""}

      <form
        className="flex w-full gap-4 flex-wrap"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="capitalize">{t("email")}</label>
          <input
            {...register("email")}
            className="w-full p-3 bg-gray-300 rounded-lg"
            placeholder={t("titlePlaceholder")}
          />
        </div>
        <div>
          <label className="capitalize">{t("description")}</label>
          <textarea
            required
            {...register("first_name")}
            className="w-full p-3 bg-gray-300 rounded-lg"
            placeholder={t("writeMessage")}
          />
        </div>
        <button
          type="button"
          onClick={() => {
            setForm({} as Item);
            reset({});
          }}
          className="px-5 bg-[#b1b1b1] py-[6px] rounded-lg self-center uppercase"
        >
          {t("cancel")}
        </button>
        <button
          type="submit"
          className="px-5 bg-blue-500 text-white py-[6px] rounded-lg self-center uppercase"
        >
          {t("send")}
        </button>
      </form>
    </div>
  );
};

export default CreateItem;
