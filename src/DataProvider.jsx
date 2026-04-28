/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState, createContext } from "react";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);

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
