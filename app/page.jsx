import DashHeader from "./components/dashheader/DashHeader";

export default function Home() {
  return (
    <div>
      <DashHeader nome={"Felipe 92 Dev"} email={"dev.felipesantos@gmail.com"} />
      <div style={{ marginLeft: 100 }}>
        <p>Página principal</p>
      </div>
    </div>
  );
}
