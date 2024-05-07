import Image from "next/image";
import Header from "../components/header";
import DocumentList from "../components/documentList";
import Sidebar from "../components/sidebar";

export default function Home() {
  const documents = [
    { name: 'Identités', sender: 'Moi', dateAdded: '22/02/2022', size: '--' },
    { name: 'Relevés bancaires', sender: 'Moi', dateAdded: '10/02/2021', size: '--' },
    { name: 'Documentation', sender: 'Moi', dateAdded: '28/04/2024', size: '580.71 Ko' },
    // Add more documents as needed
  ];

  return (
    <div className="flex h-screen">
      <Sidebar backgroundColor="bg-gray-200" />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="overflow-auto p-4">
          <DocumentList documents={documents} />
        </main>
      </div>
    </div>
  );
}
