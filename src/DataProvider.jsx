import { useEffect, useState, createContext } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);

// eslint-disable-next-line react-refresh/only-export-components
export const DataContext = createContext(null);

export function DataProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await supabase.from("tasks").select();
      setTasks(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return <DataContext value={{ tasks, loading }}>{children}</DataContext>;
}
