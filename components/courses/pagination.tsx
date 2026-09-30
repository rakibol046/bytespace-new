import Link from "next/link";
import { ChevronLeftIcon } from "@/components/ui/icons";

type PaginationProps = {
  page: number;
  pageCount: number;
  hrefFor: (page: number) => string;
};

const arrowClass =
  "flex h-12 w-14 items-center justify-center rounded-3xl border border-shuttle-200 bg-white transition-colors";

export function Pagination({ page, pageCount, hrefFor }: PaginationProps) {
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  const prev = page > 1 ? hrefFor(page - 1) : null;
  const next = page < pageCount ? hrefFor(page + 1) : null;

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-6">
      {prev ? (
        <Link href={prev} aria-label="Previous page" className={`${arrowClass} text-shuttle-950 hover:border-shuttle-400`}>
          <ChevronLeftIcon />
        </Link>
      ) : (
        <span aria-disabled="true" className={`${arrowClass} text-shuttle-700`}>
          <ChevronLeftIcon />
          <span className="sr-only">Previous page</span>
        </span>
      )}

      <ol className="flex items-center gap-6 font-poppins text-xl leading-7 font-semibold tracking-[-0.01em]">
        {pages.map((number) => (
          <li key={number}>
            {number === page ? (
              <span aria-current="page" className="text-shuttle-200">
                <span className="sr-only">Page </span>
                {number}
              </span>
            ) : (
              <Link href={hrefFor(number)} className="text-shuttle-950 hover:text-primary">
                <span className="sr-only">Page </span>
                {number}
              </Link>
            )}
          </li>
        ))}
      </ol>

      {next ? (
        <Link href={next} aria-label="Next page" className={`${arrowClass} text-shuttle-950 hover:border-shuttle-400`}>
          <ChevronLeftIcon className="rotate-180" />
        </Link>
      ) : (
        <span aria-disabled="true" className={`${arrowClass} text-shuttle-700`}>
          <ChevronLeftIcon className="rotate-180" />
          <span className="sr-only">Next page</span>
        </span>
      )}
    </nav>
  );
}
