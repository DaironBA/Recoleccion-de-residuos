const Alert = ({ message, onClose, show, type }) => {
  if (!show) return null;

  // Definir clases de Tailwind según el tipo
  const alertClass = type === 'success'
    ? 'bg-green-700 text-white'
    : type === 'error'
    ? 'bg-red-500 text-white'
    : 'bg-blue-500 text-white';

  return (
    <div className="fixed inset-0 flex justify-center items-center z-10 bg-[rgba(0,0,0,0.7)]">
      <div className={`rounded-lg shadow-lg bg-white max-w-md w-full text-center grid grid-cols-[auto_1fr]`}>
        <div className={`${alertClass} w-2`}></div>
        <div className="p-6">
            <h2 className="text-lg font-bold">{type === 'success' ? '¡Éxito!' : type === 'error' ? '¡Error!' : 'Alerta!'}</h2>
            <p className="my-4">{message}</p>
            <button
            onClick={onClose}
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-black/80 cursor-pointer focus:outline-none"
            >
            Aceptar
            </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
