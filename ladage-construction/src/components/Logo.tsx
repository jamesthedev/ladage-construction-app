export default function Logo({ className = '', style = {} }) {
  return (
    <img
      src="/ladage-logo.png"
      alt="Ladage Construction Logo"
      className={className}
      style={style}
    />
  );
}
