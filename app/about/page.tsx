export default function About() {
  return (
    <main className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold mb-6">
        About JobSphere
      </h1>

      <p className="text-lg text-gray-400 leading-8">
        JobSphere is a modern platform designed to connect talented developers
        with leading companies around the world. Users can search, explore,
        and discover exciting career opportunities through a clean and intuitive interface.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-16">
        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">1000+</h2>
          <p>Jobs Listed</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">300+</h2>
          <p>Companies</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">10K+</h2>
          <p>Developers</p>
        </div>
      </div>
    </main>
  );
}