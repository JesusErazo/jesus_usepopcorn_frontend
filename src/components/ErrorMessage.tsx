export default function ErrorMessage({ error }: { error: string }) {
  return (
    <p className="error-msg">
      <span>⛔</span> {error}
    </p>
  );
}
