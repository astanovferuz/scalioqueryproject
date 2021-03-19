import './App.css';
import Main from './components/Main';
import { ConfigureStore } from "../src/redux/ConfigureStore";
import { Provider } from "react-redux";

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <div>
        <Main />
      </div>
    </Provider>
  );
}

export default App;
