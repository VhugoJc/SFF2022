import { Settings, Sponsors, Events } from '../interfaces/SettingsInterface';
import { Presale } from '../interfaces/PresaleInterface';

// Import JSON data using static imports
import settingsData from '../../assets/data/settings.json';
import sponsorsData from '../../assets/data/sponsors.json';
import eventsData from '../../assets/data/events.json';
import teamsData from '../../assets/data/teams.json';
import presalesData from '../../assets/data/presales.json';

export class LocalDataService {
  
  static async getSettings(): Promise<Settings> {
    try {
      // Combine all data into the Settings interface format
      const settings: Settings = {
        name: settingsData.name,
        website: settingsData.website,
        logo: settingsData.logo,
        date: new Date(settingsData.date),
        startTime: settingsData.startTime,
        endTime: settingsData.endTime,
        duration: settingsData.duration,
        homeData: settingsData.homeData,
        sponsors: sponsorsData as Sponsors[],
        events: eventsData as Events[]
      };
      
      return settings;
    } catch (error) {
      console.error('Error loading local settings:', error);
      throw error;
    }
  }

  static async getSponsors(): Promise<Sponsors[]> {
    try {
      return sponsorsData as Sponsors[];
    } catch (error) {
      console.error('Error loading sponsors:', error);
      return [];
    }
  }

  static async getEvents(): Promise<Events[]> {
    try {
      return eventsData as Events[];
    } catch (error) {
      console.error('Error loading events:', error);
      return [];
    }
  }

  static async getTeams(): Promise<any[]> {
    try {
      // Normalize MongoDB ObjectId format to string IDs
      const normalizedTeams = teamsData.map((team: any) => ({
        ...team,
        _id: typeof team._id === 'string' ? team._id : team._id.$oid
      }));
      return normalizedTeams;
    } catch (error) {
      console.error('Error loading teams:', error);
      return [];
    }
  }

  static async getPresales(): Promise<Presale[]> {
    try {
      // Normalize MongoDB ObjectId format to string IDs
      const normalizedPresales = presalesData.map((presale: any) => ({
        ...presale,
        _id: typeof presale._id === 'string' ? presale._id : presale._id.$oid,
        sellerId: typeof presale.sellerId === 'string' ? presale.sellerId : presale.sellerId.$oid,
        products: presale.products?.map((product: any) => 
          typeof product === 'string' ? product : product.$oid
        ) || []
      }));
      return normalizedPresales as Presale[];
    } catch (error) {
      console.error('Error loading presales:', error);
      return [];
    }
  }

  static async getPresalesByTeamId(teamId: string): Promise<Presale[]> {
    try {
      // Normalize and filter presales by team ID
      const normalizedPresales = presalesData.map((presale: any) => ({
        ...presale,
        _id: typeof presale._id === 'string' ? presale._id : presale._id.$oid,
        sellerId: typeof presale.sellerId === 'string' ? presale.sellerId : presale.sellerId.$oid,
        products: presale.products?.map((product: any) => 
          typeof product === 'string' ? product : product.$oid
        ) || []
      }));
      
      return normalizedPresales.filter((presale: any) => presale.sellerId === teamId) as Presale[];
    } catch (error) {
      console.error('Error loading presales by team id:', error);
      return [];
    }
  }

  static async getTeamById(id: string): Promise<any> {
    try {
      return teamsData.find((team: any) => {
        // Handle both string ID and MongoDB ObjectId format
        const teamId = typeof team._id === 'string' ? team._id : team._id.$oid;
        return teamId === id;
      });
    } catch (error) {
      console.error('Error loading team by id:', error);
      return null;
    }
  }

  // Additional utility methods for food navigation screens
  static async getPresaleStatistics(): Promise<any> {
    try {
      const presales = await this.getPresales();
      return {
        total: presales.length,
        totalSales: presales.reduce((sum, presale) => sum + (presale.cost || 0), 0),
        averagePrice: presales.length > 0 ? presales.reduce((sum, presale) => sum + (presale.cost || 0), 0) / presales.length : 0
      };
    } catch (error) {
      console.error('Error loading presale statistics:', error);
      return { total: 0, totalSales: 0, averagePrice: 0 };
    }
  }

  static async getProducts(): Promise<any[]> {
    try {
      // Import products data dynamically
      const productsData = require('../../assets/data/products.json');
      
      // Normalize MongoDB ObjectId format to string IDs
      const normalizedProducts = productsData.map((product: any) => ({
        ...product,
        _id: typeof product._id === 'string' ? product._id : product._id.$oid,
        teamSellerId: typeof product.teamSellerId === 'string' ? product.teamSellerId : product.teamSellerId.$oid
      }));
      
      return normalizedProducts;
    } catch (error) {
      console.error('Error loading products:', error);
      return [];
    }
  }
}
