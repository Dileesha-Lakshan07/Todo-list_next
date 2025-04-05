import AddTodo from "@/component/todos/AddTodo";

export default function Home() {
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span>Todo App</span>
      <h1 className="text-5xl font-extrabold uppercase mb-5 text-center">
        <span>w/</span>Server Action
      </h1>

      <div className="flex justify-center flex-col items-center">
        {/*input.todo*/}
        <AddTodo />
        {/*map todos*/}
      </div>
    </div>
  );
}
