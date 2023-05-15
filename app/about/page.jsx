const page = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <section className="rounded-lg">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
          <img
            alt="Main about image"
            src="https://th.bing.com/th/id/OIG.XyNQK7CU50UfzCxjdd1Y?pid=ImgGn"
            className="aspect-square w-full rounded-lg object-cover"
          />

          <blockquote className="sm:col-span-2">
            <p className="text-xl font-medium sm:text-2xl">
              Quill is a simple book management system where you can add,
              update, remove books.
            </p>
            <p className="text-xl font-medium sm:text-2xl">
              Project still in beta state, kindley report any bugs you face.
            </p>

            <cite className="mt-8 inline-flex items-center not-italic">
              <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
              <p className="text-sm  text-gray-500 sm:ms-3">
                <strong>Open source project</strong>, by @Eyad.
              </p>
            </cite>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default page;
