import './App.css';


function UseConfirm() {
    const useConfirm = (message = "", callback, rejection) => {
        if(typeof callback !== "function") {
            return;
        }
        const confirmAction = () => {
            if(window.confirm(message)){
                callback();
            } else {
                rejection()
            }
        }

        return confirmAction;
    }

    const deleteWorld = () => console.log("deleting the world....");
    const abort = () => console.log("Aborted");
    const confirmDelete = useConfirm("Are you sure", deleteWorld, abort)

    return (
        <div className="App">
            <button onClick={() => confirmDelete()}>Delete the wolrd</button>
        </div>
  );
}

export default UseConfirm;