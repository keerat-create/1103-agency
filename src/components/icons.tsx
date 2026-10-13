export function ArrowUpRight() {
  return <svg aria-hidden="true" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 19 19 5M5 5h14v14" /></svg>;
}

export function Asterisk() {
  return <svg aria-hidden="true" width="1em" height="1em" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="round">{Array.from({length: 8}, (_, index) => <path key={index} d="M50 50V9" transform={`rotate(${index * 45} 50 50)`} />)}</svg>;
}
