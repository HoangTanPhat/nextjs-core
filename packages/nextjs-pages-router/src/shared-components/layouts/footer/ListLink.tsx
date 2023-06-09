import Typography from "@mui/material/Typography/Typography";
import Link from "next/link";

type Item = {
  id: string;
  name: string;
  href: string;
  external: boolean;
};

type Props = {
  title: string;
  items: Array<Item>;
};

export default function ListLink({ title, items }: Props) {
  return (
    <div className="lg:space-y-6 space-y-4 pr-2">
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={(theme) => ({
          fontSize: 20,
          color: theme.palette.grey[50],
        })}
      >
        {title}
      </Typography>
      <ul className="text-body14 text-neutral-90 lg:space-y-1 lg:text-body16 space-y-1 text-left">
        {items.map((item, idx) => (
          <li key={idx}>
            <Link
              href={item.href}
              rel="noreferrer"
              className="hover:text-neutral-60 text-sm text-neutral-50"
              target={item.external ? "_blank" : "_self"}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
