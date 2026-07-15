'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong!</h2>
        <p className="text-gray-600 mb-6">{error.message}</p>
        <button
          onClick={() => reset()}
          className="bg-[#EB5324] text-white px-6 py-3 rounded hover:bg-[#d4481f] transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
