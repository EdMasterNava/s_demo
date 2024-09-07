import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex'
        }}
      >
        {/* <Sidebar /> */}
        <div
          style={{
            backgroundColor: '#555555',
            flex: '1',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <h1>Dashboard</h1>
        </div>
      </div>
    </>
  );
}
