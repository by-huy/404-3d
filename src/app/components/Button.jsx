import Link from "next/link";

export default function Button() {
  return (
    <Link
      href="https://www.huyng.xyz"
      className="bg-white text-3xl rounded-full px-20 py-12 mt-12 font-neuemontreal"
    >
      <span>Go back</span>
    </Link>
  );
}
