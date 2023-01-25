export default function MoneyTag({
  startGradient,
  endGradient,
  dominantColor,
  detailsBgColor,
  dominant,
  cash,
}) {
  const backgroundStyle = {
    background: `linear-gradient(90deg, ${startGradient} 0%, ${endGradient} 102.82%)`,
  }

  const dominantStyle = {
    color: dominantColor,
  }

  const detailsBgStyle = {
    background: detailsBgColor,
    color: "white",
  }

  return (
    <div className="money-tag column" style={backgroundStyle}>
      <div className="money-tag__header row">
        <h2 style={dominantStyle}>{dominant}</h2>
        <h3 style={detailsBgStyle}>details</h3>
      </div>
      <h2 className="cash">{`$${cash}`}</h2>
    </div>
  )
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: MoneyTagStyle,
    },
  ]
}
