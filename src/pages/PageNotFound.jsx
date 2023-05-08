export default function PageNotFound() {
  return (
    <section class="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
      <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div class="max-w-md text-center">
          <h2 class="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span class="sr-only">Error</span>404
          </h2>
          <p class="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p class="mt-4 mb-8 dark:text-gray-400">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <button
            rel="noopener noreferrer"
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Back to homepage
          </button>
        </div>
      </div>
    </section>
  );
}
