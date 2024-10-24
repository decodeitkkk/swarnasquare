import Sidebar from "./Layout/Sidebar";

const HomepageEditor = () => {
    return (
        <div className="flex">
            <Sidebar/>
      <div className="p-6 bg-white rounded-lg shadow-lg w-full mt-28">
        <h2 className="text-2xl font-semibold mb-4">Edit Homepage</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Homepage Banner</label>
            <input type="file" className="w-full mt-2 p-2 border rounded" />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-700">Promo Video</label>
            <input type="file" className="w-full mt-2 p-2 border rounded" />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-700">SEO Meta Title</label>
            <input
              type="text"
              className="w-full mt-2 p-2 border rounded"
              defaultValue="Buy the Best Jewelry Online"
            />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-700">Meta Description</label>
            <textarea
              className="w-full mt-2 p-2 border rounded"
              defaultValue="Discover our wide range of beautiful jewelry..."
            ></textarea>
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-700">Meta Keywords</label>
            <input
              type="text"
              className="w-full mt-2 p-2 border rounded"
              defaultValue="jewelry, necklaces, rings"
            />
          </div>
  
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Save Changes
          </button>
        </form>
      </div>
      </div>
    );
  };
  
  export default HomepageEditor;
  