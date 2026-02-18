import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Index } from "./pages/Index";
import { NotFound } from "./pages/NotFound";
import ChipDisplay from "./MatChipsSelector/components/ChipDisplay/ChipDisplay";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="test"
          element={
            <ChipDisplay
              option={{ label: "Test Label", icon: null, value: "test" }}
              onDelete={() => console.log("deleted")}
              onClick={() => console.log("clicked")}
              disabled={false}
              color="primary"
              variant="filled"
              size="medium"
              deleteIcon={null}
              chipProps={{ style: { margin: "4px" } }}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
