
export const Button = ({ children, primary }: React.PropsWithChildren<{ primary?: boolean }>) => {

 const buttonClass = `bg-orange py-2 px-4 rounded ${primary ? 'bg-red-500 hover:bg-red-700 text-white font-bold' : 'bg-gray-500 hover:bg-gray-700 text-gray-900 font-semibold'}`;
  
 return (
    <button className={buttonClass}>
      {children}
    </button>
  );
};