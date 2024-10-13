import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-600 via-blue-800 to-indigo-900 text-white">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-2xl p-10 w-11/12 md:w-2/3 lg:w-1/2 max-w-3xl text-center">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide text-white drop-shadow-lg">
            Simulador de Propagação de Ondas
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-200">
            Visualize diferentes tipos de ondas em tempo real e explore seus comportamentos.
          </p>
        </header>

        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
          <Link
            to="/simulation"
            className="relative group flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-indigo-700"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 to-purple-600 opacity-70 group-hover:opacity-100 rounded-lg"></span>
            <span className="relative z-10">Iniciar Simulação</span>
          </Link>
          <Link
            to="/explore"
            className="relative group flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-blue-700"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-teal-600 opacity-70 group-hover:opacity-100 rounded-lg"></span>
            <span className="relative z-10">Explorar Tipos de Ondas</span>
          </Link>
        </div>

        <footer className="mt-10 text-gray-300 text-sm">
          <p>Desenvolvido por <span className="font-semibold text-white">Davi Komura</span></p>
          <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  )
}
