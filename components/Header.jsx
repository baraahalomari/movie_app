import Image from 'next/image';
import HeaderItem from './HeaderItem';
import { HomeIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, SearchIcon, UserIcon, FilmIcon, LogoutIcon } from '@heroicons/react/outline';
import getUser from '../utils/getUser';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import decode from 'jwt-decode';

const Header = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const location = router.pathname;


  const handleClick = (e) => {
    e.preventDefault()
    router.push('/auth')
  }

  const handleMove = (e) => {
    e.preventDefault()
    router.push('/movie')
  }

  useEffect(() => {
    setUser(getUser());
  }, [])

  useEffect(() => {
    const token = user?.user?.access_token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp < Date.now() / 1000) {
        localStorage.removeItem('profile');
        setUser(null);
        router.push('/');
      }
    }
  }, [location])

  const logout = () => {
    localStorage.removeItem('profile');
    setUser(null);
    router.push('/');
  }

  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">

      <Image
        className='object-contain'
        src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        width={200}
        height={100}
      />

      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem Icon={HomeIcon} title="HOME" />
        <HeaderItem Icon={BadgeCheckIcon} title="VERIFIED" />
        <HeaderItem Icon={CollectionIcon} title="COLLECTION" />
        <HeaderItem Icon={LightningBoltIcon} title="TRENDING" />
        <HeaderItem Icon={SearchIcon} title="SEARCH" />
        {user ? null :
          <span onClick={handleClick}>
            <HeaderItem Icon={UserIcon} title="ACCOUNT" />
          </span>}
        {!user ? null :
          <span onClick={handleMove}>
            <HeaderItem Icon={FilmIcon} title="USER MOVIES" />
          </span>}
        {user ?
          <span onClick={logout} >
            <HeaderItem Icon={LogoutIcon} title="LOGOUT" />
          </span>
          : null}

      </div>
    </header>
  )
}

export default Header