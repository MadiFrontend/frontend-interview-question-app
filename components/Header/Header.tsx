import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-primary text-white py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          HR Prep
        </Link>
        <div>
          <Link href="/questions" className="px-4 hover:underline">
            Questions
          </Link>
        </div>
      </nav>
    </header>
  );
}