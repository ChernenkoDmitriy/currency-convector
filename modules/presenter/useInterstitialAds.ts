import { useEffect } from "react"
import { InterstitialAd, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : TestIds.INTERSTITIAL;
// const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const interstitial = InterstitialAd.createForAdRequest(adUnitId);

const ADDS_TOME_OFFSET_MS = 30000;

export const useInterstitialAds = () => {
    useEffect(() => {
        interstitial.load();
        const timer = setTimeout(() => {
            interstitial.show();
        }, ADDS_TOME_OFFSET_MS);
        return () => { clearTimeout(timer) };
    }, []);
}