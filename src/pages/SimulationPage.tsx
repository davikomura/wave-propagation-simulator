export const SimulationPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-600 via-blue-800 to-indigo-900 text-white">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-2xl p-10 w-11/12 md:w-3/4 lg:w-2/3 max-w-4xl text-center">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide text-white drop-shadow-lg">
            Simulação de Ondas
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-200">
            Configure e visualize a propagação de diferentes tipos de ondas em tempo real.
          </p>
        </header>

        <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
          <div className="bg-white bg-opacity-20 p-4 rounded-lg w-full md:w-1/3">
            <h2 className="text-xl font-semibold mb-3">Selecione o Tipo de Onda</h2>
            <select className="w-full p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Onda Mecânica</option>
              <option>Onda Eletromagnética</option>
              <option>Onda de Choque</option>
            </select>
          </div>

          <div className="bg-white bg-opacity-20 p-4 rounded-lg w-full md:w-1/3">
            <h2 className="text-xl font-semibold mb-3">Parâmetros da Simulação</h2>
            <input
              type="text"
              placeholder="Velocidade"
              className="w-full p-2 mb-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Frequência"
              className="w-full p-2 mb-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Amplitude"
              className="w-full p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="bg-white bg-opacity-20 p-4 rounded-lg w-full md:w-1/3">
            <h2 className="text-xl font-semibold mb-3">Condições de Contorno</h2>
            <select className="w-full p-2 mb-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Fronteira Aberta</option>
              <option>Fronteira Fechada</option>
              <option>Periódica</option>
            </select>
            <input
              type="text"
              placeholder="Valor Inicial"
              className="w-full p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <button className="relative group px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-indigo-700">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 to-purple-600 opacity-70 group-hover:opacity-100 rounded-lg"></span>
            <span className="relative z-10">Iniciar Simulação</span>
          </button>
        </div>

        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-inner text-left">
          <h2 className="text-xl font-semibold mb-4">Visualização da Onda</h2>
          <p className="text-gray-200 mb-2">A simulação será exibida aqui após a configuração dos parâmetros.</p>
          <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">
            Visualização Gráfica da Simulação
          </div>
        </div>
      </div>
    </div>
  )
}
