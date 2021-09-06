const Filter = ({ onChange, value }) => {
  return (
    <>
      <label>
        Find contacts by name
        <input
          name="filter"
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default Filter;