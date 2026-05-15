type ActionLinkProps = {
  href: string | null;
  label: string;
  unavailableLabel?: string;
  variant?: "primary" | "secondary" | "quiet";
  className?: string;
};

export function ActionLink({
  href,
  label,
  unavailableLabel = "Canal em configuração",
  variant = "primary",
  className = "",
}: ActionLinkProps) {
  const classes = `actionLink actionLink--${variant} ${className}`.trim();

  if (!href) {
    return (
      <span className={`${classes} actionLink--disabled`} aria-disabled="true" title={unavailableLabel}>
        {label}
        <small>{unavailableLabel}</small>
      </span>
    );
  }

  return (
    <a className={classes} href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}
