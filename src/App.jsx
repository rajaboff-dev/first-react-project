import { QueryClient, QueryClientProvider } from "react-query";
import CardComponent from "./components/CardComponent";
import { Input } from "./components/ui/input";
import { useState } from "react";

function App() {
  const [searchInputValue, setSearchInputValue] = useState('')

  const handleSearchInputValue = (e) => {
    setSearchInputValue(e.target.value)
  }
  return (
    <div className="flex flex-col items-center justify-center w-full px-10">
      <h1 className="text-2xl font-bold">Recipes</h1>
      <Input placeholder='Search foods here' onInput={handleSearchInputValue} />
      <QueryClientProvider client={new QueryClient()}>
        <CardComponent searchInputValue={searchInputValue} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
