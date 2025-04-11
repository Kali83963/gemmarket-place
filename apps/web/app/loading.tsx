import { LoadingSpinner } from "@/components/loading-spinner";

export default function Loading() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center">
      <LoadingSpinner size="xl" />
      <h3 className="mt-4 text-xl font-medium text-gray-700">Loading...</h3>
      <p className="mt-2 text-sm text-gray-500">
        Please wait while we prepare your experience
      </p>
    </div>
  );
}
