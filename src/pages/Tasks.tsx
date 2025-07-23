import { useEffect, useState } from "react";
import Language from "../components/Language";
import { getAllItem } from "../api/item";
import CreateItem from "../components/CreateItem";
import TableItem from "../components/TableItem";
import FilterTasks from "../components/FilterItem";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

export interface Item {
  id?: number;
  name?: string;
  job?: string;
  email?: string;
  first_name?: string;
  avatar?: string;
}

function App() {
  const [send, setSend] = useState<boolean>(false);
  const [data, setData] = useState<Item[]>([]);
  const [form, setForm] = useState<Item>({});
  const [username, setUsernameRole] = useState<string | null>();

  const [filter, setFilter] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);
  const limit = 2;
  const { t } = useTranslation();

  
  useEffect(() => {
    filterPurchases(1);
  }, [filter]);

  useEffect(() => {
    filterPurchases(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const username = localStorage.getItem("username") ;
    setUsernameRole(username)
  }, [currentPage]);

  const filterPurchases = async (page: number): Promise<void> => {
    try {
      setSend(true);
      const resp = await getAllItem(
        `page=${page}&per_page=${limit}&${filter}`
      );
      if (resp) {
        setTotalItems(resp.data.total);
        setTotalPages(resp.data.total_pages);
        setData(resp.data.data);
      }
    } catch {
      Swal.fire(t("fetchError"));
    } finally {
      setSend(false);
    }
  };

  return (
    <div className="flex flex-col gap-10 bg-gray-800 min-h-screen w-full p-10 text">
      <div className="flex gap-4 items-center">
        <Language />
        <p className="text-white uppercase">
          {username}
        </p>
      </div>

      <div className="text-black flex flex-col gap-2">
        <CreateItem form={form} setForm={setForm} setSend={setSend} />
        <FilterTasks setFilter={setFilter} totalItems={totalItems} />
        <TableItem
          data={data}
          send={send}
          setSend={setSend}
          setData={setData}
          setForm={setForm}
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default App;
