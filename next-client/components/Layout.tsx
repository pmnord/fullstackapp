import Link from 'next/link';

const Layout: React.FC<{}> = ({ children }) => {
  // TODO add a fullWidth prop which removes the width and margin from the container for child components that need access to the full screen width

  return (
    <div className='flex flex-col min-h-screen max-w-3xl mx-auto'>
      <header className='py-2'>
        <nav>
          <Link href='/' passHref>
            <a className='block font-bold'>HousePlantr</a>
          </Link>
        </nav>
      </header>
      <main className='flex-1'>{children}</main>
      <footer className='text-center p-2'>
        <Link href='https://github.com/pmnord/fullstackapp' passHref>
          <a className='text-gray-500 underline '>View Source on GitHub</a>
        </Link>
      </footer>
    </div>
  );
};

export default Layout;
