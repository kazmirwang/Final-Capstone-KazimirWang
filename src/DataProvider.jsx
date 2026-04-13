import { useEffect, useState, createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const DataContext = createContext(null);

export function DataProvider({ children }) {
  const [tasks, setTasks] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/data/tasks.json")
      .then((res) => {
        console.log(res);
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then((json) => setTasks(json))
      .then((res) => setLoading(!res.ok))
      .catch((err) => console.error("Error fetching JSON:", err));
  }, []);

  return <DataContext value={{ tasks, loading }}>{children}</DataContext>;
}
