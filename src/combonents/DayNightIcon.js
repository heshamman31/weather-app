import { useEffect, useState } from 'react';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const DayNightIcon = () => {
  const [isDaytime, setIsDaytime] = useState(true);

  useEffect(() => {
    const checkTime = () => {
      const hours = new Date().getHours();
      setIsDaytime(hours >= 6 && hours < 18); // Daytime from 6 AM to 6 PM
    };

    checkTime(); // Initial check when component mounts
    if (isDaytime) {
      document.body.classList.add("day");
      document.body.classList.remove("night");
    } else {
      document.body.classList.add("night");
      document.body.classList.remove("day");
    }
    const interval = setInterval(checkTime, 60 * 60 * 1000); // Update every hour
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [isDaytime]);

  return (
    <div>
  { isDaytime? <WbSunnyIcon className={'cloud'}/> :<NightsStayIcon className={'cloud'}/> }
    </div >
  );
};
export default DayNightIcon;