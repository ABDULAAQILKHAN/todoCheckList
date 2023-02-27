import Task from './component/task';
import {Provider} from 'react-redux'
import store from './store'
function App() {
  return (
    <div className="App">
      <center>
        <Provider store={store}>
        <Task />
        </Provider>
      </center>
    </div>
  );
}

export default App;
