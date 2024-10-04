import { Paths } from "../../constants/Paths";
import * as icon from '@coreui/icons';

export type LocationAndDisplayName = {
    location: string;
    displayName: string;
    icon?: string[];
}

export type MenuGroup = {
    displayName: string;
    groupId: string;
    icon?: string[];
    path?: string;
    subGroups?: MenuGroup[];
    items?: LocationAndDisplayName[]
}

type pathTitle = {
    path: string,
    title?: string
}


export const menuTree: MenuGroup[] = [
    {
        displayName: 'Assemble',
        groupId: 'assemble',
        icon: icon.cilCog,
        path: Paths.AssemblePath,
        items: [
            {
                location: Paths.AssembleInsertFootPath,
                displayName: 'Insert Foot'
            },
            {
                location: Paths.AssembleScrewFootPath,
                displayName: 'Fasten Foot'
            },
            {
                location: Paths.AssembleNeckPath,
                displayName: 'Attach Neck'
            }
        ]
    },
    {
        displayName: 'Adjust',
        groupId: 'adjust',
        path: Paths.AdjustPath,
        icon: icon.cilMobile,
        items: [
            {
                location: Paths.AdjustExtendAllPath,
                displayName: 'Extend All'
            },
            {
                location: Paths.AdjustPlacePhonePath,
                displayName: 'Place Phone'
            },
            {
                location: Paths.AdjustPushFeetInPath,
                displayName: 'Push Feet In'
            },
            {
                location: Paths.AdjustTightenNeckPath,
                displayName: 'Tighten Neck'
            },
            {
                location: Paths.AdjustLowerFeetPath,
                displayName: 'Lower Feet'
            },
            {
                location: Paths.AdjustTestAssemblyPath,
                displayName: 'Test Assembly'
            }
        ]
    },
    {
        displayName: 'Mount',
        groupId: 'mount',
        path: Paths.MountPath,
        icon: icon.cilBike,
        subGroups: [
            {
                displayName: 'Handlebar V1',
                groupId: 'mount-handlebar-v1',
                items: [
                    {
                        location: Paths.MountHandlebarPath,
                        displayName: 'Ring to Handlebar'
                    },
                    {
                        location: Paths.MountHandlebarCompletePath,
                        displayName: 'Handlebar Complete'
                    }
                ]
            },
            {
                displayName: 'Stem V1',
                groupId: 'mount-stem-v1',
                items: [
                    {
                        location: Paths.MountCenterRingPath,
                        displayName: 'Ring to Stem'
                    },
                    {
                        location: Paths.MountCenterHolderPath,
                        displayName: 'Holder to Stem'
                    },
                    {
                        location: Paths.MountCenterCompletePath,
                        displayName: 'Stem Mount Complete'
                    }
                ]
            },
            {
                displayName: 'Aero V1',
                groupId: 'mount-aero-v1',
                items: [
                    {
                        location: Paths.MountAeroHolderPath,
                        displayName: 'Holder to Aerobar'
                    },
                    {
                        location: Paths.MountAeroRingPath,
                        displayName: 'Ring to Aerobar'
                    },
                    {
                        location: Paths.MountAeroHandlebarPath,
                        displayName: 'Aerobar to Handlebar'
                    },
                    {
                        location: Paths.MountAeroCompletePath,
                        displayName: 'Aerobar Complete'
                    }
                ]
            },
            {
                displayName: 'Handlebar V2',
                groupId: 'mount-handlebar-v2',
                items: [
                    {
                        location: Paths.MountHandlebarV2RingPath,
                        displayName: 'Ring to Handlebar'
                    },
                    {
                        location: Paths.MountHandlebarV2HolderPath,
                        displayName: 'Holder to Ring'
                    },
                    {
                        location: Paths.MountHandlebarV2TightenPath,
                        displayName: 'Tighten Ring'
                    },
                    {
                        location: Paths.MountHandlebarV2CompletePath,
                        displayName: 'Holder Complete'
                    },
                    {
                        location: Paths.MountHandlebarV2PhonePath,
                        displayName: 'Phone to Holder'
                    }
                ]
            },
            {
                displayName: 'Stem V2',
                groupId: 'mount-stem-v2',
                items: [
                    {
                        location: Paths.MountCenterV2RingPath,
                        displayName: 'Ring to Stem'
                    },
                    {
                        location: Paths.MountCenterV2HolderPath,
                        displayName: 'Holder to Ring'
                    },
                    {
                        location: Paths.MountCenterV2TightenPath,
                        displayName: 'Tighten Ring'
                    },
                    {
                        location: Paths.MountCenterV2CompletePath,
                        displayName: 'Holder Complete'
                    },
                    {
                        location: Paths.MountCenterV2PhonePath,
                        displayName: 'Phone to Holder'
                    }
                ]
            },
            {
                displayName: 'Aero V2',
                groupId: 'mount-aero-v2',
                items: [
                    {
                        location: Paths.MountAeroV2HolderPath,
                        displayName: 'Holder to Aerobar'
                    },
                    {
                        location: Paths.MountAeroV2HandlebarPath,
                        displayName: 'Aerobar to Handlebar'
                    },
                    {
                        location: Paths.MountAeroV2CompletePath,
                        displayName: 'Holder Complete'
                    },
                    {
                        location: Paths.MountAeroV2PhonePath,
                        displayName: 'Phone to Holder'
                    }
                ]
            }
        ]
    },
    {
        displayName: 'Accessories',
        groupId: 'accessory',
        path: Paths.AccessoriesPath,
        icon: icon.cilPlus,
        subGroups: [
            {
                displayName: 'Lamp Mirror',
                groupId: 'accessory-lamp-mirror',
                items: [
                    {
                        location: Paths.AccessoryLampMirrorAssemblyPath,
                        displayName: 'Assemble'
                    },
                    {
                        location: Paths.AccessoryLampMirrorCompletePath,
                        displayName: 'Complete'
                    },
                    {
                        location: Paths.AccessoryLampMirrorPhonePath,
                        displayName: 'Phone'
                    }
                ]
            },
            {
                displayName: 'Video Mirror',
                groupId: 'accessory-video-mirror',
                items: [
                    {
                        location: Paths.AccessoryVideoMirrorAssemblyPath,
                        displayName: 'Mirror Assembly'
                    },
                    {
                        location: Paths.AccessoryVideoMirrorCompletePath,
                        displayName: 'Mirror Complete'
                    },
                    {
                        location: Paths.AccessoryVideoMirrorPhonePath,
                        displayName: 'Mirror w/ Phone'
                    }
                ]
            },
            {
                displayName: 'Rain Shield',
                groupId: 'accessory-rain-shield',
                items: [
                    {
                        location: Paths.AccessoryRainShieldSocketPath,
                        displayName: 'Socket'
                    },
                    {
                        location: Paths.AccessoryRainShieldElbowPath,
                        displayName: 'Shield on Elbow'
                    },
                    {
                        location: Paths.AccessoryRainShieldLidPath,
                        displayName: 'Lid to Shield'
                    },
                    {
                        location: Paths.AccessoryRainShieldCompletePath,
                        displayName: 'Complete Shield'
                    }
                ]
            }
        ]
    }
]

const getLinkTitles = () => {
    const result: pathTitle[] = [];
    for (let group of menuTree) {
        addGroupLinks(result, group);
    }
    return result;
}

const addGroupLinks = (result: pathTitle[], menuGroup: MenuGroup) => {
    if (menuGroup.path) {
        if (!result.find(x => x.path === menuGroup.path)) {
            result.push({
                path: menuGroup.path,
                title: menuGroup.displayName
            })
        }
    }
    if (menuGroup.items) {
        for (let item of menuGroup.items) {
            if (!result.find(x => x.path === item.location)) {
                result.push({
                    path: item.location,
                    title: item.displayName
                })
            }
        }
    }
    if (menuGroup.subGroups) {
        for (let group of menuGroup.subGroups) {
            addGroupLinks(result, group);
        }
    }
}

export const linkTitles = getLinkTitles();