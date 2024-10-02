export class Paths{
    public static LoadingSpinnerPath: string = 'loading-spinner'

    public static HtmlIndexFilePath: string = 'index.html'
    public static HtmlPhoneholderFilePath: string = 'phoneholder.html'
    public static HtmlDeployedBasePath: string = '/phone-holder-3/'

    public static StartMenuPath: string = ''

    public static ModelsV1Path = '/phone-holder-3/cad/v1'
    public static ModelsV2Path = '/phone-holder-3/cad/v2'
    // public static ModelsV1Path = './cad/v1'
    // public static ModelsV2Path = './cad/v2'

    private static addBasePath = (path: string) => {
        return this.HtmlDeployedBasePath + path;
    };

    public static AssemblePath: string = this.addBasePath('assemble')
    public static AssembleInsertFootPath: string = this.addBasePath('assemble-insert-foot')
    public static AssembleScrewFootPath: string = this.addBasePath('assemble-screw-foot')
    public static AssembleNeckPath: string = this.addBasePath('assemble-neck')
    public static AssembleHandlebarPath: string = this.addBasePath('assemble-handlebar')
    public static AssembleStemPath: string = this.addBasePath('assemble-stem')

    public static AdjustPath: string = this.addBasePath('adjust')
    public static AdjustExtendAllPath: string = this.addBasePath('adjust-extend-all')
    public static AdjustPlacePhonePath: string = this.addBasePath('adjust-place-phone')
    public static AdjustPushFeetInPath: string = this.addBasePath('adjust-push-feet-in')
    public static AdjustTightenNeckPath: string = this.addBasePath('adjust-tighten-neck')
    public static AdjustLowerFeetPath: string = this.addBasePath('adjust-lower-feet')
    public static AdjustTestAssemblyPath: string = this.addBasePath('adjust-test-assembly')

    public static MountPath: string = this.addBasePath('mount')

    public static MountHandlebarPath: string = this.addBasePath('mount-handlebar')
    public static MountHandlebarCompletePath: string = this.addBasePath('mount-handlebar-complete')

    public static MountCenterRingPath: string = this.addBasePath('mount-center-ring')
    public static MountCenterHolderPath: string = this.addBasePath('mount-center-holder')
    public static MountCenterCompletePath: string = this.addBasePath('mount-center-complete')

    public static MountAeroHolderPath: string = this.addBasePath('mount-aero-holder')
    public static MountAeroRingPath: string = this.addBasePath('mount-aero-ring')
    public static MountAeroHandlebarPath: string = this.addBasePath('mount-aero-handlebar')
    public static MountAeroCompletePath: string = this.addBasePath('mount-aero-complete')

    public static MountCenterV2RingPath: string = this.addBasePath('mount-center-v2-ring')
    public static MountCenterV2HolderPath: string = this.addBasePath('mount-center-v2-holder')
    public static MountCenterV2TightenPath: string = this.addBasePath('mount-center-v2-tighten')
    public static MountCenterV2CompletePath: string = this.addBasePath('mount-center-v2-complete')
    public static MountCenterV2PhonePath: string = this.addBasePath('mount-center-v2-phone')

    public static MountHandlebarV2RingPath: string = this.addBasePath('mount-handlebar-v2-ring')
    public static MountHandlebarV2HolderPath: string = this.addBasePath('mount-handlebar-v2-holder')
    public static MountHandlebarV2TightenPath: string = this.addBasePath('mount-handlebar-v2-tighten')
    public static MountHandlebarV2CompletePath: string = this.addBasePath('mount-handlebar-v2-complete')
    public static MountHandlebarV2PhonePath: string = this.addBasePath('mount-handlebar-v2-phone')

    public static MountAeroV2HolderPath: string = this.addBasePath('mount-aero-v2-holder')
    public static MountAeroV2HandlebarPath: string = this.addBasePath('mount-aero-v2-handlebar')
    public static MountAeroV2CompletePath: string = this.addBasePath('mount-aero-v2-complete')
    public static MountAeroV2PhonePath: string = this.addBasePath('mount-aero-v2-phone')

    public static AccessoriesPath: string = this.addBasePath('accessories')
    public static AccessoryLampMirrorAssemblyPath: string = this.addBasePath('accessory-lamp-mirror-assembly')
    public static AccessoryLampMirrorCompletePath: string = this.addBasePath('accessory-lamp-mirror-complete')
    public static AccessoryLampMirrorPhonePath: string = this.addBasePath('accessory-lamp-mirror-phone')

    public static AccessoryVideoMirrorAssemblyPath: string = this.addBasePath('accessory-video-mirror-assembly')
    public static AccessoryVideoMirrorCompletePath: string = this.addBasePath('accessory-video-mirror-complete')
    public static AccessoryVideoMirrorPhonePath: string = this.addBasePath('accessory-video-mirror-phone')

    public static AccessoryRainShieldSocketPath: string = this.addBasePath('accessory-rain-shield-socket')
    public static AccessoryRainShieldElbowPath: string = this.addBasePath('accessory-rain-shield-elbow')
    public static AccessoryRainShieldLidPath: string = this.addBasePath('accessory-rain-shield-lid')
    public static AccessoryRainShieldCompletePath: string = this.addBasePath('accessory-rain-shield-complete')
}