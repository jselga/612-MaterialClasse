function Button({ children, isLoading, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        disabled={isLoading}
        type="button"
        className={`btn btn-${isLoading ? 'secondary':'primary'}`}
      >
        {isLoading ? "Loading..." : children}
      </button>

      {/* <button type="button" className="btn btn-primary">
        Primary
      </button>
      <button type="button" className="btn btn-secondary">
        Secondary
      </button> */}
    </div>
  );
}

export default Button;
