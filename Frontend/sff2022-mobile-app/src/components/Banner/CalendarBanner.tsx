import { StyleSheet } from 'react-native';
import {View, Text, Image} from 'dripsy';
import React from 'react';
import { styles } from '../../theme/stylesheet';
import moment from 'moment';
import 'moment/locale/es'; // Import Spanish locale
import { LocalDataService } from '../../utils/LocalDataService';

interface Props{
  date: Date | undefined
}
export default function CalendarBanner({date}:Props) {
  // Set moment to use Spanish locale
  moment.locale('es');
  
  const [settings, setSettings] = React.useState<any>(null);
  
  React.useEffect(() => {
    const loadSettings = async () => {
      try {
        const settingsData = await LocalDataService.getSettings();
        setSettings(settingsData);
      } catch (error) {
        console.error('Error loading settings:', error);
      }
    };
    loadSettings();
  }, []);
  
  const eventDate = moment(date);
  const now = moment();
  const isToday = eventDate.isSame(now, 'day');
  const isTomorrow = eventDate.isSame(now.clone().add(1, 'day'), 'day');
  
  const getDateLabel = () => {
    if (isToday) return '¡Hoy!';
    if (isTomorrow) return '¡Mañana!';
    return eventDate.format('dddd, DD [de] MMMM');
  };

  const getEventInfo = () => {
    if (settings?.startTime && settings?.endTime) {
      // Convert 24h format to 12h format with AM/PM
      const formatTime = (time24: string) => {
        const [hours, minutes] = time24.split(':');
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const hour12 = hour % 12 || 12;
        return `${hour12}:${minutes} ${ampm}`;
      };
      
      const startFormatted = formatTime(settings.startTime);
      const endFormatted = formatTime(settings.endTime);
      
      return {
        timeLabel: `${startFormatted} \na\n${endFormatted}`,
        isFullDay: true
      };
    }
    // Show loading state when settings aren't loaded yet
    return {
      timeLabel: 'Cargando...',
      isFullDay: false
    };
  };

  const eventInfo = getEventInfo();

  return (
    <View sx={calendarBanner.container}>
      <View sx={calendarBanner.headerSection}>
        <Text sx={calendarBanner.catchPhrase}>¡No te lo puedes perder!</Text>
        {(isToday || isTomorrow) && (
          <View sx={calendarBanner.urgentBadge}>
            <Text sx={calendarBanner.urgentText}>{isToday ? '¡HOY!' : '¡MAÑANA!'}</Text>
          </View>
        )}
      </View>
      
      <View sx={calendarBanner.contentSection}>
        <Image sx={calendarBanner.illustration} source={require('../../../assets/img/calendar_illustration.png')}/>
        
        <View sx={calendarBanner.timeInfo}>
          <Text sx={calendarBanner.dateText}>{getDateLabel()}</Text>
          <Text sx={eventInfo.isFullDay ? calendarBanner.durationText : calendarBanner.timeText}>
            {eventInfo.timeLabel}
          </Text>
          {eventInfo.isFullDay && (
            <Text sx={calendarBanner.fullDaySubtext}>Todo el día</Text>
          )}
          <View sx={calendarBanner.divider} />
          <Text sx={calendarBanner.venueText}>Universidad Politécnica de San Luis Potosí</Text>
          <Text sx={calendarBanner.locationText}>📍</Text>
        </View>
      </View>
      
      <View sx={calendarBanner.footerSection}>
        <Text sx={calendarBanner.footerText}>¡Prepárate para una experiencia increíble!</Text>
      </View>
    </View>
  )
}
const calendarBanner = StyleSheet.create({
    container: {
        backgroundColor: '$primary',
        borderRadius: 16,
        marginHorizontal: 16,
        marginVertical: 32,
        minHeight: 280,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    headerSection: {
        alignItems: 'center',
        paddingTop: 30,
        paddingHorizontal: 20,
        paddingBottom: 15,
    },
    catchPhrase: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '$light',
        textAlign: 'center',
        marginBottom: 15,
    },
    urgentBadge: {
        backgroundColor: '#FF6B6B',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        marginTop: 8,
    },
    urgentText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    contentSection: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 25,
    },
    illustration: {
        height: 140,
        width: 140,
        marginRight: 25,
    },
    timeInfo: {
        flex: 1,
        alignItems: 'center',
    },
    dateText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '$light',
        textAlign: 'center',
        marginBottom: 12,
        textTransform: 'capitalize',
    },
    timeText: {
        fontSize: 28,
        fontWeight: '900',
        color: '#FFD700',
        textAlign: 'center',
        marginBottom: 15,
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    durationText: {
        fontSize: 26,
        fontWeight: '900',
        color: '#FFD700',
        textAlign: 'center',
        marginBottom: 8,
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    fullDaySubtext: {
        fontSize: 14,
        color: '$light',
        textAlign: 'center',
        opacity: 0.8,
        marginBottom: 15,
        fontStyle: 'italic',
    },
    divider: {
        height: 2,
        backgroundColor: '$light',
        width: '80%',
        marginVertical: 15,
        opacity: 0.5,
    },
    venueText: {
        fontSize: 16,
        color: '$light',
        textAlign: 'center',
        fontWeight: '600',
        marginBottom: 8,
    },
    locationText: {
        fontSize: 14,
        color: '$light',
        textAlign: 'center',
        opacity: 0.9,
    },
    footerSection: {
        paddingHorizontal: 20,
        paddingBottom: 40,
        paddingTop: 15,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 16,
        color: '$light',
        textAlign: 'center',
        fontStyle: 'italic',
        opacity: 0.9,
    },
});