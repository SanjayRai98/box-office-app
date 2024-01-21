export function AppTitle(props) {
  const {
    title = 'Box Office',
    subtitle = 'Are you looking for a Movie or an Actor ?',
  } = props;

  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}
