import Link from "next/link";

interface BreadcrumbProps {
  items: {
    label: string;
    href?: string;
  }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="text-sm text-gray-400 mb-8">
      {items.map((item, index) => (
        <span key={index}>
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-blue-500 transition"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-white font-medium">
              {item.label}
            </span>
          )}

          {index < items.length - 1 && (
            <span className="mx-2">&gt;</span>
          )}
        </span>
      ))}
    </nav>
  );
}