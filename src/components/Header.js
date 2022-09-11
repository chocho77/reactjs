const Header = (props) => {
  return (
    <div>
      <h1>{props.task}</h1>
    </div>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header
