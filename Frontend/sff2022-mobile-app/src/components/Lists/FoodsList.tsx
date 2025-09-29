import { Text, StyleSheet, Alert, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import { View, } from 'dripsy';
import FoodCard from '../Cards/FoodCard';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Presale } from '../../interfaces/PresaleInterface';
import { LocalDataService } from '../../utils/LocalDataService';
import { FavContext } from '../../context/FavsContext/FavsContext';

interface Props{
  refreshing: boolean;
  shuffleKey?: number;
}

// Utility function to shuffle array
const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export default function FoodList({refreshing, shuffleKey}:Props) {
  const [allPresales, setAllPresales] = useState<Presale[]>([]);
  const [displayedPresales, setDisplayedPresales] = useState<Presale[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const { favsState, addFood, deleteFood } = useContext(FavContext);
  const ITEMS_PER_CHUNK = 10;

  useEffect(() => {
    const getPraseles = async () => {
      try {
        const response = await LocalDataService.getPresales();
        if (response) {
          // Shuffle presales when shuffleKey changes
          const presalesToSet = shuffleKey ? shuffleArray(response) : response;
          setAllPresales(presalesToSet);
          
          // Reset pagination and load first chunk
          setDisplayedPresales(presalesToSet.slice(0, ITEMS_PER_CHUNK));
        }
      } catch (err) {
        Alert.alert('Error inesperado', 'Verifica tu conexión a internet', [{
          text: 'Ok'
        }]);
      }
    };

    if (!refreshing) {
      getPraseles();
    }
  }, [refreshing, shuffleKey]);

  const loadMoreItems = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      const startIndex = displayedPresales.length; // Start from where we left off
      const endIndex = startIndex + ITEMS_PER_CHUNK;
      const newItems = allPresales.slice(startIndex, endIndex);
      
      setDisplayedPresales(prev => [...prev, ...newItems]);
      setIsLoading(false);
    }, 500); // Small delay to show loading state
  };

  // Fix: Check if there are actually more items beyond what's currently displayed
  const hasMoreItems = displayedPresales.length < allPresales.length;

  const navigation = useNavigation<StackNavigationProp<any>>();

  const handleFavorite = (presaleId: string) => {
    const isFavorited = favsState.FoodIds.includes(presaleId);
    if (isFavorited) {
      deleteFood(presaleId);
    } else {
      addFood(presaleId);
    }
  };
  
  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <View style={[foodsList.container, { flex: 1 }]}>
        {
          displayedPresales.map((presale: Presale) => {
            const isFavorited = favsState.FoodIds.includes(presale._id);
            return (
              <FoodCard
                key={presale._id}
                title={presale.name}
                price={presale.cost}
                img={{ uri: presale.coverImg }}
                fav={isFavorited}
                onPress={() => navigation.navigate("Mi Comida", {
                  presaleData: presale
                })}
                onFavPress={() => handleFavorite(presale._id)}
              />
            );
          })
        }
        
        {hasMoreItems && (
          <View sx={foodsList.loadMoreContainer as any}>
            <TouchableOpacity 
              style={foodsList.loadMoreButton} 
              onPress={loadMoreItems}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={foodsList.loadMoreText}>Cargar más combos</Text>
              )}
            </TouchableOpacity>
          </View>
        )}
        
        {/* Footer removed - now handled at FoodScreen level like HomeScreen */}
      </View>
    </View>
  );
}

const foodsList = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6ff',
    minHeight: '90%',
    paddingHorizontal: 16,
  },
  loadMoreContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  loadMoreButton: {
    backgroundColor: '#380B58',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
    minWidth: 150,
    alignItems: 'center',
  },
  loadMoreText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});