import { cx } from "#/lib/cx";

export function Title({
  level = "h1",
  className,
  ...props
}: React.HTMLProps<HTMLHeadingElement> & {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}) {
  const Tag = level;

  let style;
  switch (level) {
    case "h1":
      style =
        "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mt-8 first:mt-0";
      break;
    case "h2":
      style =
        "scroll-m-20 border-b pb-2 font-bold text-3xl tracking-tight mt-8 first:mt-0";
      break;
    case "h3":
      style = "scroll-m-20 text-2xl font-bold tracking-tight mt-8 first:mt-0";
      break;
    case "h4":
      style = "scroll-m-20 text-xl font-bold tracking-tight mt-8 first:mt-0";
      break;
    case "h5":
      style = "scroll-m-20 text-lg font-bold tracking-tight mt-8 first:mt-0";
      break;
    case "h6":
      style = "scroll-m-20 text-base font-bold tracking-tight mt-8 first:mt-0";
      break;
  }

  return (
    <Tag className={cx("font-serif uppercase", style, className)} {...props} />
  );
}

export function Paragraph({
  className,
  ...props
}: React.HTMLProps<HTMLParagraphElement>) {
  return <p className={cx("font-sans", className)} {...props} />;
}

export function Code({ className, ...props }: React.HTMLProps<HTMLElement>) {
  return (
    <code
      className={cx(
        "font-mono relative rounded px-[0.3rem] py-[0.2rem] bg-slate-100 text-sm dark:bg-slate-800 dark:text-slate-400",
        className,
      )}
      {...props}
    />
  );
}
