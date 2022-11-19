import { Suspense } from 'react';
import { store } from "app/store"
import { Provider } from 'react-redux';
import DashBoard from 'components/dashboard';
import { ThemeProvider } from '@mui/material/styles';
import { outerTheme } from "./styles/outerTheme"

function App() {

  return (
    <Provider store={store}>
      <ThemeProvider theme={outerTheme}>
        <Suspense fallback="This is Loading">
          <DashBoard />
        </Suspense>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
