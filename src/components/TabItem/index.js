import './index.css'

const TabItem = props => {
  const {tabDetails, onChangeTab, isActive} = props
  const {displayText, tabId} = tabDetails

  const activatedClass = tabId === isActive ? 'active-tab' : ''

  const onTabChange = () => {
    onChangeTab(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className={`tab-item ${activatedClass}`}
        onClick={onTabChange}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
