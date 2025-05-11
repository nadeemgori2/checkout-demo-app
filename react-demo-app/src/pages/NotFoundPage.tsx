/**
 * NotFoundPage
 * Displays a friendly 404 error page when a route does not match any known path.
 */

import Layout from "../components/Layout";

export default function NotFoundPage() {
  return (
    <Layout>
      <div className="bg-white p-6 rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.05)] max-w-[600px] w-full min-h-[100vh] md:min-h-[625px] flex flex-col justify-center items-center text-center">
        {/* 404 Illustration */}
        <img
          src="/assets/404-not-found.png"
          alt="Not Found"
          className="w-32 h-32 mb-6"
        />

        {/* Title */}
        <h1 className="text-2xl font-bold text-[#004D5A] mb-2">
          404 - Page Not Found
        </h1>

        {/* Description */}
        <p className="text-sm text-gray-600">
          Sorry, the page you're looking for doesn't exist.
        </p>

        {/* CTA to go back */}
        <a
          href="/"
          className="mt-4 inline-block px-6 py-3 bg-[#004D5A] text-white text-sm rounded hover:bg-[#003942] transition"
        >
          Back to Cart
        </a>
      </div>
    </Layout>
  );
}
