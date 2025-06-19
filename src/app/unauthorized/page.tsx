export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-4xl font-bold text-red-600 mb-4">Access Denied</h1>
        <p className="text-lg text-gray-700">
          You do not have permission to view this page.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          Please contact an administrator if you believe this is an error.
        </p>
      </div>
    </div>
  );
}
