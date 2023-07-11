const Hamburger = ({ isActive, onClick }) => {
  const handleClick = () => {
    onClick(!isActive);
  };

  return ( 
    <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={handleClick} style={{margin:'auto 20px'}}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;