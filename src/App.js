//import toast and toast container
import { ToastContainer, toast } from "react-toastify";
//import css
import "react-toastify/dist/ReactToastify.css";

function App() {

  const notify = () => {
    toast("Basic notification", {position:toast.POSITION.TOP_CENTER})
    toast.success("Succes notification ", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    toast.warn("Warning Notification ", {
      position: toast.POSITION.TOP_LEFT,
    });
    toast.error("Error Notification ", {
      position: toast.POSITION.TOP_RIGHT,
      // autoClose:false   // descative le fermeture automatique
      autoClose:8000 // modifier la durée
    });
    toast(<CustomToast />, { position:toast.POSITION.BOTTOM_RIGHT, autoClose:false})
  }

  const notif = () => {
    toast("Test ")
    toast.error("Error Test ");
    toast.success("Success Test ");
    toast.warn("Warn Test ");
  }

  //customization du contenu du message
  const CustomToast = ({closeToast}) => {
    return (
      <div>
        <p>Something went wrong !</p>
        <button onClick={closeToast}>Close</button>
      </div>
    );
  }

  return (
    <div className="App">
      <button onClick={notif}>Notify !</button>
      <ToastContainer
        position="top-left"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
