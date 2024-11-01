import Button from '@mui/material/Button';
import DayNightIcon from './DayNightIcon';
import axios from 'axios';
import { useEffect, useState } from 'react';
import moment from 'moment';
import "moment/min/locales"
import { useTranslation } from 'react-i18next';
export default function WeatherApp() {
    const { t, i18n } = useTranslation();
    const [time, setTime] = useState('');
    const [temp, setTemp] = useState({
        mainTemp: null,
        minTemp: null,
        maxTemp: null,
        description: null,
        icon: null
    });
    
    function handleTranslationButtonClicked() {
        i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
        moment.locale(i18n.language === 'en' ? 'en' : 'ar');
        setTime(moment().format('MMMM Do YYYY, h:mm:ss a'))
    }
    useEffect(() => {
        moment.locale('ar');
        i18n.changeLanguage('ar');
    }, [i18n])
    useEffect(() => {
        const updateTime = setInterval(() => {
            setTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
        }, 1000); // update time every second
        return () => {
            clearInterval(updateTime);
        }
    }, [time])
    useEffect(() => {
        // feching api data from openweathermap.org
        axios.get('https://api.openweathermap.org/data/2.5/weather?lat=30.033333&lon=31.700001&appid=2b8b8d74ab249ce45658c3305aa4c380')
            .then(function (response) {
                // handle success
                setTemp(
                    {
                        mainTemp: Math.round(response.data.main.temp - 273.15),
                        minTemp: Math.round(response.data.main.temp_min - 273.15),
                        maxTemp: Math.round(response.data.main.temp_max - 273.15),
                        description: response.data.weather[0].description,
                        icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
                    }
                );
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    const styling = i18n.language === 'en' ? { bottom: '-50px', right: '10px',  position: 'absolute', color: 'white', borderColor: 'rgba(39, 39, 135, 0.85)' } : { bottom: '-50px', left: '10px',  position: 'absolute', color: 'white', borderColor: 'rgba(39, 39, 135, 0.85)' };
    return (
        // card
        <div dir={i18n.language === 'en' ? 'ltr' : 'rtl'} style={{ position: 'relative', width: '100%', backgroundColor: 'rgb(39 39 135 / 85%)', padding: '10px', borderRadius: '20px', backgroundBlendMode: 'color' }}>
            {/* header */}
            <header style={{ display: 'flex' }}>
                <h2 style={{ margin: '10px', fontSize: '40px' }}>{t('cairo')}</h2>
                <p style={{ margin: '40px 10px 0 0' }}>{time}</p>
            </header>
            {/* header == */}
            <hr />
            {/* body */}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: "10px", marginTop: '10px' }}>
                {/* info */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p style={{ fontSize: '60px' }}>{temp.mainTemp}°C</p>
                        <img style={{ width: '40px', height: '40px', marginRight: '10px' }} src={temp.icon} alt="icon" />
                    </div>
                    <p style={{ margin: '10px 0 20px 0' }}>{t(temp.description)}</p>
                    <div style={{ display: 'flex' }}>
                        <h5>{t('min')} : {temp.minTemp}</h5>
                        <h5 style={{ margin: '0px 10px' }}>|</h5>
                        <h5>{t('max')} : {temp.maxTemp}</h5>
                    </div>
                </div>
                {/* info== */}
                <DayNightIcon />
            </div>
            {/* body== */}
            <Button onClick={handleTranslationButtonClicked} variant="outlined" style={styling}>{i18n.language === 'en' ? 'العربية': 'english'}</Button>
        </div>
        // card //
    )
}