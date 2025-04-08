import React from "react";
import { ItemsProvider } from "./contexts/item";
import { ThemeProvider } from "./contexts/theme";
import { NotificationProvider } from "./contexts/notification";
import { UserProvider } from "./contexts/user";
import { Header } from "./components/Header";
import { ItemList } from "./components/ItemList";
import { ComplexForm } from "./components/ComplexForm";
import { NotificationSystem } from "./components/NotificationSystem";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ItemsProvider>
        <ItemList />
      </ItemsProvider>
      
      <NotificationProvider>
        <UserProvider>
          <Header />
          <ComplexForm />
          <NotificationSystem />
        </UserProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default App;
