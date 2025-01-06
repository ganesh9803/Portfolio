

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
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I am deeply passionate about driving digital transformation and leveraging technology to innovate across industries.I am eager to secure a challenging position in the tech industry where I can apply my technical expertise and problem-solving skills to contribute meaningfully to dynamic development teams. My goal is to engage in impactful projects that push boundaries and set new benchmarks in technology innovation. I aspire to grow professionally by learning from experienced professionals and embracing cutting-edge technologies that shape the future of digital solutions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
            My drive stems from a deep-seated passion for technology and its potential to drive positive change. I thrive in collaborative environments where creativity and innovation are encouraged, eager to contribute fresh perspectives and valuable insights to achieve collective goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}