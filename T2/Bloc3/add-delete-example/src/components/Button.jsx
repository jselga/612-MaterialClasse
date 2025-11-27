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

    </div>
  );
}

export default Button;
