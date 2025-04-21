// import library
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

const Form = ({ thing, handleInput, handleSubmit }) => {
  return (
    <>
      <h1 className="text-3xl sm:text-6xl font-bold text-center">
        What is your "One thing"?
      </h1>
      <form
        className="flex ring-4 rounded-md ring-slate-200 dark:ring-slate-800 focus-within:ring-teal-600 focus-within:ring-offset-4 bg-slate-100 ring-offset-slate-200 dark:ring-offset-slate-800"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="bg-inherit rounded-md font-sans text-slate-800 py-2 px-6 focus:outline-none text-xl sm:text-2xl placeholder:text-slate-400 caret-teal-600 appearance-one w-full"
          placeholder="Enter one thing..."
          autoFocus
          maxLength="64"
          value={thing}
          onInput={handleInput}
        />
        <button className="bg-inherit rounded-md font-sans text-slate-800 py-2 px-6 focus:ouline-none focus:text-teal-600 hover:text-teal-600">
          <ArrowRightCircleIcon className="h-12 w-12 pointer-events-none" />
        </button>
      </form>
    </>
  );
};

export default Form; // 允许函数被外部调用。也就是说在app.jsx里导入这份文件之后可以调用里面的函数
