import './index.css'

const AppItem = props => {
  const {appItem} = props

  return (
    <li className="app-card">
      <img className="app-image" alt={appItem.appName} src={appItem.imageUrl} />
      <p className="app-name">{appItem.appName}</p>
    </li>
  )
}

export default AppItem
