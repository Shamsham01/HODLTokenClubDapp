import axios from 'axios';
import { useEffect, useState } from 'react';

import { ID_API_URL, USERS_API_URL } from 'config/config.mainnet';
import { useGetAccount } from 'lib';

const getUserProfileData = async (address?: string) => {
  if (!address) {
    return;
  }

  try {
    // Try Netlify function first (for production), fallback to direct API (for localhost)
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    let url;
    
    if (isLocalhost) {
      // Use direct API on localhost
      url = `${ID_API_URL}${USERS_API_URL}${address}`;
      console.log('Using direct API (localhost):', url);
      const { data } = await axios.get(`${USERS_API_URL}${address}`, {
        baseURL: ID_API_URL
      });
      return data;
    } else {
      // Use Netlify function on production
      url = `/.netlify/functions/get-user-profile?address=${address}`;
      console.log('Using Netlify function:', url);
      const { data } = await axios.get(url);
      return data;
    }
  } catch (err) {
    console.error('Unable to fetch profile url', err);
  }
};

export const useGetUserHerotag = () => {
  const { address } = useGetAccount();
  const [profileUrl, setProfileUrl] = useState('');
  const [herotag, setHerotag] = useState('');

  useEffect(() => {
    if (!address) {
      return;
    }

    const fetchUserProfileUrl = async () => {
      const data = await getUserProfileData(address);
      setProfileUrl(data?.profile?.url);
      setHerotag(data?.herotag);
    };

    fetchUserProfileUrl();
  }, [address]);

  return { herotag, profileUrl };
};
