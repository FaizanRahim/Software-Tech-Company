import React from "react";
import Header from "./components/Header";


function App() {
  return (
    <div>
      <Header />

      <main className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-600">
          Software Tech Company
        </h1>
      </main>
    </div>
  );
}

export default App;