import './App.css';
import Minutes from './component/Minutes';
import {Provider} from 'react-redux';
import store from './component/store';
function App() {
  return (
    <Provider store={store}>    <Minutes/>
    </Provider>
    );
}

export default App;
