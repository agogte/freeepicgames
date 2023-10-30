import GameCards from "./Components/GameCards";

function App() {
  return (
    <div className="bg-gradient-to-br from-black to-gray-800 w-full h-screen">
      <p className='text-white font-bold text-5xl flex justify-center pt-24'>Games currently free on Epic Games</p>
      <GameCards />
    </div>
  );
}

export default App;
