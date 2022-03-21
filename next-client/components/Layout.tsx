const Layout: React.FC<{}> = ({ children }) => {
  // TODO add a fullWidth prop which removes the width and margin from the container for child components that need access to the full screen width

  return (
    <div className='max-w-3xl mx-auto'>
      <header>
        <nav></nav>
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
