import {
    BuildingLibraryIcon,
    ArrowPathIcon,
    MusicalNoteIcon,
    WrenchScrewdriverIcon,
    ChatBubbleLeftEllipsisIcon,
    ShieldCheckIcon,
    DocumentMagnifyingGlassIcon,
    UserGroupIcon,
    QuestionMarkCircleIcon,
    DevicePhoneMobileIcon,
    HandThumbUpIcon,
    BanknotesIcon,
} from '@heroicons/react/24/solid';

export const navigation = [
    {
        name: 'Features',
        items: [
            {
                name: 'Artist Booking',
                path: '/artist',
                icon: MusicalNoteIcon,
                desc: 'Book your best artist'
            },
            {
                name: 'Venue Booking',
                path: '/venue',
                icon: BuildingLibraryIcon,
                desc: 'Find a perfect event center for your event'
            },
            {
                name: 'Organizer Booking',
                path: '/organizer',
                icon: ArrowPathIcon,
                desc: 'Get the best event planners'
            },
            {
                name: 'Event Management Tools',
                path: '/event-management',
                icon: WrenchScrewdriverIcon,
                desc: 'All in one tool for perfect management'
            },
        ]
    },
    {
        name: 'About',
        items: [
            {
                name: 'Our Story',
                path: '/about',
                icon: ChatBubbleLeftEllipsisIcon,
                desc: 'Null'
            },
            {
                name: 'Mission',
                path: '/mission',
                icon: ShieldCheckIcon,
                desc: 'Null'
            }
        ]
    },
    {
        name: 'Help',
        items: [
            {
                name: 'Blog',
                path: '/blog',
                icon: DocumentMagnifyingGlassIcon,
                desc: 'Null'
            },
            {
                name: 'Community',
                path: '/community',
                icon: UserGroupIcon,
                desc: 'Null'
            }
        ]
    },
    {
        name: 'Contact',
        items: [
            {
                name: 'Query',
                path: '/query',
                icon: QuestionMarkCircleIcon,
                desc: 'Null'
            },
            {
                name: 'Social Media',
                path: '/social-media',
                icon: DevicePhoneMobileIcon,
                desc: 'Null'
            }
        ],
    },
    {
        name: 'Pricing',
        items: [
            {
                name: 'Partnership',
                path: '/partnership',
                icon: HandThumbUpIcon,
                desc: 'Null'
            },
            {
                name: 'Prices',
                path: '/prices',
                icon: BanknotesIcon,
                desc: 'Null'
            }
        ]
    },

]