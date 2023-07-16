import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>hi</div>
      <Link className="text-blue-500 underline" href="/about">
        this is the about page
      </Link>
    </div>
  );
}
