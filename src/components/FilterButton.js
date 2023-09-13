function FilterButton(props) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}>
      <span className="visually-hidden">보여주다</span>
      <span>{props.name}</span>
      <span className="visually-hidden">할 일들</span>
    </button>
  );
}


export default FilterButton;
