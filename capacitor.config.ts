import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.github.huluvu424242.shmooion-todo',
  appName: 'Shmoo Todo',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    }
  }
};

export default config;
