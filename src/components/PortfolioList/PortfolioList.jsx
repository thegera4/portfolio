import './PortfolioList.scss'

function PortfolioList({ id, title, selected, setSelected }) {
  return (
    <li 
    className={selected ? "portfolioList active" : "portfolioList"}
    onClick={() => setSelected(id)}>
        {title}
    </li>
  )
}

export default PortfolioList