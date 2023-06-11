import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./global/Topbar";
import Sidebar from "./global/Sidebar";
import Dashboard from "./containers/Dashboard";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import VendorList from "./containers/vendorsList";
import VendorDetails from "./containers/vendorsList/vendor";
import VendorAlternative from "./containers/VendorAlternative/VendorAlternative";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/team" element={<Team />} /> */}
              <Route path="/vendor-details" element={<VendorList />}></Route>
              <Route path="/vendor-details/:id" element={<VendorDetails />} />
              <Route
                path="/vendor-alternative"
                element={<VendorAlternative />}
              />
              {/* <Route path="/vendor-onboarding" element={<Form />} /> */}
              {/* <Route path="/products" element={<Form />} />  */}

              {/* <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
