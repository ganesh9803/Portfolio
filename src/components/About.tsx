

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80"
              alt="Profile"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            As an aspiring full-stack developer with a solid technical background, I possess a robust foundation in Full Stack Development with specialized expertise in the MERN stack (MongoDB, Express, React, Node.js). My dedication lies in crafting seamless and scalable web solutions that redefine user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}