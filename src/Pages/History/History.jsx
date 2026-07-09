import EndHistorySection from "./EndHistorySection";
import HistoryShowData from "./HistoryShowData";
import MainHistorySection from "./MainHistorySection";

export default function History() {
  return (
    <div className="flex flex-col gap-32 container mx-auto ">
      <div>
        <MainHistorySection />
      </div>
      <div>
        <HistoryShowData />
      </div>
      <div>
        <EndHistorySection />
      </div>
    </div>
  );
}
