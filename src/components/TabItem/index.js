import './index.css'

const TabItem = props => {
  const {tabItem, onChangeTab, tabId, isActive} = props
  const onClickTab = () => {
    onChangeTab(tabId)
  }
  const activeClassName = isActive ? 'active-class' : ''
  return (
    <li>
      <button
        onClick={onClickTab}
        className={`tab-button ${activeClassName}`}
        type="button"
      >
        {tabItem.displayText}
      </button>
    </li>
  )
}

export default TabItem
