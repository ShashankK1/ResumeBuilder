import { useReducer } from "react";
import "./App.css";
import Header from "./sections/Header/Header";
import Left from "./sections/Left/Left";
import AppContext from "./utility/ContextApis";
import { PDFViewer, usePDF } from '@react-pdf/renderer';
import Viewer from "./utility/Viewer/Viewer";

const initialState = {
  details: {
    email: "",
    name: "",
    phone: "",
    address: "",
  },
  experience: [
    {
      companyName0: "",
      role0: "",
      work0: "",
      jobduration0: "",
    }
  ],
  education: [
    {
      institute0: "",
      qualification0: "",
      marks0: "",
      duration0: "",
    }
  ],
  skills: [],
};

const reducerFn = (state, action) => {
  return {
    ...state,
    [action.type]: action.data,
  };
};

function App() {
  const [store, dispatch] = useReducer(reducerFn, initialState);
  // const store = useMemo(() => ({ state, dispatch }), [state]);
  // eslint-disable-next-line
  const [instance, update] = usePDF({document: Viewer})
  const runData = (store)=>{
    update();
  }

  return (
    <AppContext.Provider value={[store, dispatch]}>
      <div className="App container-fluid">
        <Header />
        <div className="bottom d-flex">
          <Left runData={runData}/>
          <div className='Right'>
            <PDFViewer style={{width:'100%', height:'100%'}}>
              <Viewer store={store}/>
            </PDFViewer>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
