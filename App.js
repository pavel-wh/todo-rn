import React , { useState } from 'react'

import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { ScreenState } from './src/context/screen/ScreenState'
import { TodoState } from './src/context/todo/TodoState'
import { MainLayout } from './src/MainLayout'

async function loadApplication() {
  await Font.loadAsync({
    'MullerThin': require('./assets/fonts/MullerThin.ttf'),
    'MullerExtraBold': require('./assets/fonts/MullerExtraBold.ttf'),
  })
}

export default function App() {
  const [isReady, setIsReady] = useState(false)
 
  if (!isReady) {
    return <AppLoading
      startAsync={ loadApplication }
      onError={ error => console.log(error) } 
      onFinish={ () => setIsReady(true) }
    />
  }

  return (
    <ScreenState>
      <TodoState>
        <MainLayout />
      </TodoState>
    </ScreenState>
  )
}

   