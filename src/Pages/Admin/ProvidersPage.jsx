import Topbar from "../../components/Admin/layout/Topbar";
import Sidebar from "../../components/Admin/layout/Sidebar";
import Providers from "../../components/Admin/management/Providers";

function ProviderPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar />

      <div className="flex flex-1 flex-col md:flex-row">
        <div className="w-full md:w-64 bg-fuchsia-700">
          <Sidebar />
        </div>

        <div className="flex-1 p-4 md:p-6 bg-gray-100">
          <h1 className="text-2xl font-semibold mb-4">Providers List</h1>
          <div className="bg-white rounded-lg shadow-md p-4">
            <Providers />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProviderPage;
