export const HEADER_MENU_REJUV = [
  { label: 'HOME', route: '/home' },
  { label: 'CODE ON PACK', route: '/code-on-pack' },
  {
    name: 'RAFFLEPROMOSPRIZES',
    label: 'RAFFLE PROMOS AND PRIZES',
    route: '/points-and-raffle-prizes',
    submenu: [
      {
        name: 'InstantRaffle',
        label: 'PINASTIG Panalo Promo',
        secondLabel: 'Instant Raffle',
        isNew: true,
        route: '/points-and-raffle-prizes/pinastig-panalo'
      },
      {
        label: 'Astig XCHANGE',
        secondLabel: 'Straight Redemption',
        route: '/points-and-raffle-prizes/astig-xchange'
      },
      {
        label: 'Mighty Reels',
        secondLabel: 'Watch and Earn',
        route: '/points-and-raffle-prizes/mighty-reels'
      }
    ]
  },
  {
    name: 'SPP',
    label: 'SPECIAL PROMO PACK',
    route: '/special-promo-pack',
    submenu: [
      {
        name: 'SPP-PAGE',
        label: '',
        secondLabel: 'New!',
        route: '/special-promo-pack/promo-prizes',
        disable: false
      }
    ]
  },
  {
    label: 'MIGHTY FEATURES',
    route: '/mighty-features'
  },
  { label: 'PRODUCTS', route: '/mighty-world' },
  {
    label: 'FAQ',
    route: '/faq',
    submenu: [
      { label: 'Mga Madalas Itanong', route: '/faq/madalas-itanong' },
      { label: 'Tutorial', route: '/faq/tutorial' },
      { label: 'Contact Us', route: '/faq/mighty-contact-us' },
      { label: 'Terms and Conditions', route: '/faq/terms-and-conditions' }
    ]
  }
]
