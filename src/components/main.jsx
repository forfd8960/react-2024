export default function MainPage() {
  const features = [
    {
      title: "Read Articles",
      description:
        "Improve your reading comprehension with our curated articles.",
    },
    {
      title: "Spoken Practice",
      description:
        "Enhance your speaking skills through interactive exercises.",
    },
    {
      title: "Writing Practice",
      description:
        "Develop your writing abilities with guided practice sessions.",
    },
  ];

  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      <header className="bg-white shadow">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">Literacyenglish</div>
          <div>
            <a
              href="/login"
              className="text-gray-600 hover:text-gray-800 px-3 py-2"
            >
              Login
            </a>
            <a
              href="/signup"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Signup
            </a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          You are English Learning Partner
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
