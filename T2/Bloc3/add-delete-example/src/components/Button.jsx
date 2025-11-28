function Button({ children, onClick }) {
  return (
    <div>
      <button onClick={onClick} type="button" className={`btn btn-primary`}>
        {children}
      </button>
    </div>
  );
}

export default Button;
