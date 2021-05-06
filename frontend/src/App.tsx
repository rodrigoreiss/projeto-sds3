import DataTable from "componets/dataTable";
import Footer from "componets/footer";
import NavBar from "componets/navbar";

function App() {
  return (
    <>
      <NavBar />
      <div className = "container">
        <h1 className="text-primary">Olá mundo</h1>
        <DataTable />
      </div>
      <Footer/>
    </>
  );
}

export default App;
