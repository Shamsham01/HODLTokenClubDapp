import axios from 'axios';
import { useEffect, useState } from 'react';

import { ID_API_URL, USERS_API_URL } from 'config/config.mainnet';
import { useGetAccount } from 'lib';

const getUserProfileData = async (address?: string) => {
  if (!address) {
    return;
  }

  try {
    console.log('Fetching profile data for address:', address);
    console.log('API URL:', `${ID_API_URL}${USERS_API_URL}${address}`);
    const { data } = await axios.get(`${USERS_API_URL}${address}`, {
      baseURL: ID_API_URL
    });

    console.log('Profile data received:', data);
    return data;
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
