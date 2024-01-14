import { Link } from "react-router-dom";


const Blog = () => {
    return (
        <div className="bg-gray-300">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
          <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-center">
            Publish Date: 14 january 2024
          </p>
          <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
            <div className="mb-4">
    <Link
    to="/"
    aria-label="Article"
    className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
  >
    What is the purpose of react router?
    
    </Link>

    </div>
          <p className="text-base text-gray-700 md:text-lg">
            React Router is a standard library for routing in React. It enables
            the navigation among views of various components in a React
            Application, allows changing the browser URL, and keeps the UI in
            sync with the URL. Let us create a simple application to React to
            understand how the React Router works. The application will contain
            three components: home component, about a component, and contact
            component. We will use React Router to navigate between these
            components. Setting up the React Application: Create a React
            application using create-react-app and lets call it quiz-router.
          </p>
        </div>
        <div className="sm:text-center">
    <Link
    
    to="/"
    aria-label=""
    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
  >
    Read more
    
    
    </Link>
    </div>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-center">
          Publish Date: 14 january 2024
        </p>
        <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
          <div className="mb-4">
<Link
to="/"
aria-label="Article"
className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
>
How does context api work in react?

</Link>


</div>
          <p className="text-base text-gray-700 md:text-lg">
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux. Context API is a
            (kind of) new feature added in version 16.3 of React that allows one
            to share state across the entire app (or part of it) lightly and
            with ease.
          </p>
        </div>
        <div className="sm:text-center">
    <Link
     to="/"
     aria-label=""
     className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
   >
     Read more
    
    </Link>

    </div>
      </div>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-center">
          Publish Date: 14 january 2024
        </p>
        <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
          <div className="mb-4"></div>
    <Link

to="/"
aria-label="Article"
className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
>
What is useRef in react?
    
    </Link>

    </div>
          <p className="text-base text-gray-700 md:text-lg">
            The useRef Hook allows you to persist values between renders. It can
            be used to store a mutable value that does not cause a re-render
            when updated. It can be used to access a DOM element directly. You
            would need to access DOM elements, for example, to focus on the
            input field when the component mounts. To make it work you'll need
            to create a reference to the input, assign the reference to ref
            attribute of the tag, and after mounting call the special method
            element.focus() on the element.
          </p>
        </div>
        <div className="sm:text-center">
    <Link
    
    to="/"
    aria-label=""
    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
  >
    Read more
    </Link>

</div>
</div>
</div>
    
    );
};

export default Blog;