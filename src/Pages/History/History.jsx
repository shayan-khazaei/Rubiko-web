import EndHistorySection from "./EndHistorySection";
import HistoryShowData from "./HistoryShowData";
import MainHistorySection from "./MainHistorySection";

export default function History() {
  return (
    <div className="flex flex-col gap-32 container mx-auto px-6 xl:px-0 ">
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
