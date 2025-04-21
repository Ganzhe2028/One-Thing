// import library
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const CustomButton = ({ text, handleCompletedThing }) => {
  return (
    <button 
      className="flex items-center space-x-3 text-2xl 
      bg-teal-600 dark:bg-teal-500 px-6 py-3 rounded-md 
      text-slate-200 focus:outline-none focus-visible:ring-4 
      ring-teal-600 dark:ring-teal-500 ring-offset-4 
      ring-offset-slate-200 dark:ring-offset-slate-800
      hover:opacity-80 transition-all
      active:opacity-80 
      duration-200"
      autoFocus
      onClick={handleCompletedThing}
    >
      <span className="pointer-events-none">{text}</span>
      <CheckCircleIcon className="pointer-events-none h-12 w-12" />
    </button>
  )
}

export default CustomButton;