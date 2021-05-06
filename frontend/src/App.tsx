import BarChart from "componets/barChart";
import DataTable from "componets/dataTable";
import DonutChart from "componets/donuChart";
import Footer from "componets/footer";
import NavBar from "componets/navbar";

function App() {
  return (
    <>
      <NavBar />
      <div className = "container">
        <h1 className="text-primary py-3">DashBoard de 2021</h1>
        
        <div className="row px-3">
          <div className="col-sm-6">
             <h5 className="text-center text-secondary" > Taxa de conversão (%)</h5>
             <BarChart />

          </div>
          <div className="col-sm-6">
             <h5 className="text-center text-secondary">Todas as Vendas</h5>
             <DonutChart />

          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary">Todas Vendas</h2>
        </div>
        <DataTable />
      </div>
      <Footer/>
    </>
  );
}

export default App;
