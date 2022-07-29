// fonts.tsx
import { useFonts } from 'expo-font'
export default function Fonts({ children }: { children: React.ReactNode }) {
  const [loaded] = useFonts({
    ['Rubik-regular']: require('../../assets/fonts/Rubik/static/Rubik-Regular.ttf'),
    ['Rubik-bold']: require('../../assets/fonts/Rubik/static/Rubik-Bold.ttf'),
  })
  if (!loaded) return null
  return <>{children}</>
}