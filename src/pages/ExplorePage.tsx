import { Link } from 'react-router-dom';

const waveList = [
    { name: 'Equação da Onda 1D', path: '/explore/wave/wave1d' },
    { name: 'Equação da Onda 2D', path: '/explore/wave/wave2d' },
    { name: 'Equação da Onda 3D', path: '/explore/wave/wave3d' },
    { name: 'Equação de D’Alembert', path: '/explore/wave/dalembert' }
  ];
  

export const ExplorePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-600 via-blue-800 to-indigo-900 text-white">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-2xl p-10 w-11/12 md:w-3/4 lg:w-2/3 max-w-4xl text-center">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide text-white drop-shadow-lg">
            Explore os Tipos de Ondas
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-200">
            Clique em uma onda para saber mais sobre suas propriedades e comportamento.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {waveList.map((wave, index) => (
            <Link
              to={wave.path}
              key={index}
              className="bg-white bg-opacity-20 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-opacity-30"
            >
              <h2 className="text-xl font-semibold text-white">{wave.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
