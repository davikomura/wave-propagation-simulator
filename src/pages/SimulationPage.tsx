import { useState } from 'react';

export const SimulationPage = () => {
  const waveList = [
    { name: 'Equação da Onda 1D', value: 'wave1d' },
    { name: 'Equação da Onda 2D', value: 'wave2d' },
    { name: 'Equação da Onda 3D', value: 'wave3d' },
    { name: 'Equação de D’Alembert', value: 'dalembert' },
  ];

  const [selectedWave, setSelectedWave] = useState('wave1d');
  const [L, setL] = useState('');
  const [Lx, setLx] = useState('');
  const [Ly, setLy] = useState('');
  const [Lz, setLz] = useState('');
  const [T, setT] = useState('');
  const [c, setC] = useState('');
  const [initialCondition, setInitialCondition] = useState('');
  const [initialVelocity, setInitialVelocity] = useState('');
  const [boundaryCondition, setBoundaryCondition] = useState('Dirichlet');
  const [alpha, setAlpha] = useState('');
  const [beta, setBeta] = useState('');

  const handleSimulationStart = () => {
    // Implementar a lógica para enviar os parâmetros para o backend e iniciar a simulação
    console.log({
      selectedWave,
      L,
      Lx,
      Ly,
      Lz,
      T,
      c,
      initialCondition,
      initialVelocity,
      boundaryCondition,
      alpha,
      beta,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-600 via-blue-800 to-indigo-900 text-white">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-2xl p-10 w-11/12 md:w-3/4 lg:w-2/3 max-w-4xl text-center">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide text-white drop-shadow-lg">
            Simulação de Equações de Onda
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-200">
            Configure e visualize a propagação de diferentes tipos de equações de onda em tempo real.
          </p>
        </header>

        <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
          <div className="bg-white bg-opacity-20 p-4 rounded-lg w-full md:w-1/3">
            <h2 className="text-xl font-semibold mb-3">Selecione a Equação de Onda</h2>
            <select
              className="w-full p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={selectedWave}
              onChange={(e) => setSelectedWave(e.target.value)}
            >
              {waveList.map((wave, index) => (
                <option key={index} value={wave.value}>
                  {wave.name}
                </option>
              ))}
            </select>
          </div>

          <div className="bg-white bg-opacity-20 p-4 rounded-lg w-full md:w-1/3">
            <h2 className="text-xl font-semibold mb-3">Parâmetros da Simulação</h2>
            {(selectedWave === 'wave1d' || selectedWave === 'dalembert') && (
              <input
                type="text"
                placeholder="Comprimento do Domínio (L)"
                value={L}
                onChange={(e) => setL(e.target.value)}
                className="w-full p-2 mb-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            )}
            {(selectedWave === 'wave2d' || selectedWave === 'wave3d') && (
              <>
                <input
                  type="text"
                  placeholder="Comprimento do Domínio em X (Lx)"
                  value={Lx}
                  onChange={(e) => setLx(e.target.value)}
                  className="w-full p-2 mb-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  placeholder="Comprimento do Domínio em Y (Ly)"
                  value={Ly}
                  onChange={(e) => setLy(e.target.value)}
                  className="w-full p-2 mb-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </>
            )}
            {selectedWave === 'wave3d' && (
              <input
                type="text"
                placeholder="Comprimento do Domínio em Z (Lz)"
                value={Lz}
                onChange={(e) => setLz(e.target.value)}
                className="w-full p-2 mb-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            )}
            <input
              type="text"
              placeholder="Tempo Total (T)"
              value={T}
              onChange={(e) => setT(e.target.value)}
              className="w-full p-2 mb-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Velocidade de Propagação (c)"
              value={c}
              onChange={(e) => setC(e.target.value)}
              className="w-full p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="bg-white bg-opacity-20 p-4 rounded-lg w-full md:w-1/3">
            <h2 className="text-xl font-semibold mb-3">Condições Iniciais e de Contorno</h2>
            <input
              type="text"
              placeholder="Condição Inicial (u(x,0))"
              value={initialCondition}
              onChange={(e) => setInitialCondition(e.target.value)}
              className="w-full p-2 mb-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Velocidade Inicial (∂u/∂t(x,0))"
              value={initialVelocity}
              onChange={(e) => setInitialVelocity(e.target.value)}
              className="w-full p-2 mb-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <select
              className="w-full p-2 mb-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={boundaryCondition}
              onChange={(e) => setBoundaryCondition(e.target.value)}
            >
              <option value="Dirichlet">Dirichlet</option>
              <option value="Neumann">Neumann</option>
              <option value="Robin">Robin</option>
            </select>
            {boundaryCondition === 'Robin' && (
              <>
                <input
                  type="text"
                  placeholder="Alpha (para Robin)"
                  value={alpha}
                  onChange={(e) => setAlpha(e.target.value)}
                  className="w-full p-2 mb-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  placeholder="Beta (para Robin)"
                  value={beta}
                  onChange={(e) => setBeta(e.target.value)}
                  className="w-full p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </>
            )}
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <button
            onClick={handleSimulationStart}
            className="relative group px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-indigo-700"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 to-purple-600 opacity-70 group-hover:opacity-100 rounded-lg"></span>
            <span className="relative z-10">Iniciar Simulação</span>
          </button>
        </div>

        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-inner text-left">
          <h2 className="text-xl font-semibold mb-4">Visualização da Equação de Onda</h2>
          <p className="text-gray-200 mb-2">A simulação será exibida aqui após a configuração dos parâmetros.</p>
          <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">
            Visualização Gráfica da Simulação ({selectedWave})
          </div>
        </div>
      </div>
    </div>
  );
};
