import { useEffect, useState, createContext } from "react";

export const DataContext = createContext(null);

export function DataProvider({ children }) {
  const [tasks, setTasks] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/data/tasks.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then((json) => setTasks(json))
      .then(setLoading(false))
      .catch((err) => console.error("Error fetching JSON:", err));
  }, []);

  return <DataContext value={{tasks, loading}}>{children}</DataContext>;
}
