import { useState } from "react";
import { FaBeer, FaBook, FaClipboardList, FaList, FaCog } from 'react-icons/fa';  // Importação corrigida
import { motion } from "framer-motion";

const guides = [
  { title: "Documentação do projeto (PDF)", content: "Aqui é possível verificar a documentação atualizada do projeto com detalhes mais técnicos.", icon: <FaBook /> },
  { title: "Authentication", content: "Mollis vitae enim tristique aliquet pharetra tellus aliquet vivamus ut commodo enim nisi.", icon: <FaClipboardList /> },
  { title: "Limits & pricing", content: "In nam leo risus urna ege urna dui quisque vulputate magna lacus interdum commodo.", icon: <FaList /> },
  { title: "Advanced settings", content: "Netus nulla sagittis non massa a nunc pretium arcu viverra lorem ornare accumsan.", icon: <FaCog /> }
];

export default function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Projeto de Recuperação Especial</h1>
        <p className="text-gray-400">Análise e recuperação de créditos de convênios de empréstimo consignado, com foco na identificação de padrões, melhoria contínua dos processos e maximização dos resultados financeiros.</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {guides.map((guide, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center gap-4"
          >
            <div className="text-4xl text-blue-400">{guide.icon}</div>
            <div>
              <h2 className="text-lg font-bold">{guide.title}</h2>
              <p className="text-gray-300 mt-2">{guide.content}</p>
              <a href="https://google.com" className="text-blue-400 mt-2 hover:underline">Ir ao documento →</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
