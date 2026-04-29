/* eslint-disable no-unused-vars */
import Header from "../components/Header";
import { PieChart } from "@mui/x-charts/PieChart";
import ProgressBar from "@ramonak/react-progress-bar";
import { supabase } from "../DataProvider";

export default function Progress() {
  return (
    <>
      <Header title="Progress (placeholder)" />
      <div className="p-[5%]" />

      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 2, label: "Physics" },
              { id: 1, value: 1, label: "AP Calculus" },
              { id: 2, value: 2, label: "CS" },
            ],
            outerRadius: 70,
          },
        ]}
        slotProps={{
          legend: {
            direction: "horizontal",
            position: {
              vertical: "bottom",
            },
          },
        }}
      />

      <div className="p-7" />
      <ProgressBar
        completed={60}
        className="mx-5"
        bgColor="#5EE9B5"
        labelColor="black"
        labelSize="20px"
        height="30px"
      />
    </>
  );
}
