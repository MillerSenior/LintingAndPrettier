import MessyComponent from './components/MessyComponent';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 font-sans">
      <h1 className="text-2xl font-bold mt-4">ESLint and Prettier</h1>
      <MessyComponent />
    </div>
  );
}
