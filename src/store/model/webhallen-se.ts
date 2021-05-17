import {Store} from './store';

export const Webhallen: Store = {
  currency: 'kr.',
  labels: {
    inStock: {
      container: '#add-product-to-cart > button',
      text: ['Lägg i varukorg'],
    },
    maxPrice: {
      container: '#add-product-to-cart > .price-value > span ',
      euroFormat: false,
    },
    outOfStock: {
      container: '#add-product-to-cart > button',
      text: ['Meddela mig'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.webhallen.com/se/product/237239-MSI-GeForce-GT-710-2GB-Passive-Cooling-GT-710-2GD3H-LP',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3090',
      url:
        'https://www.webhallen.com/se/product/324101-ASUS-ROG-STRIX-GeForce-RTX-3090-24GB-Gaming-OC',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3090',
      url:
        'https://www.webhallen.com/se/product/324063-ASUS-TUF-GeForce-RTX-3090-24GB-Gaming-OC',
    },
    {
      brand: 'asus',
      model: 'strix oc white',
      series: '3090',
      url:
        'https://www.webhallen.com/se/product/329090-ASUS-ROG-STRIX-GeForce-RTX-3090-Gaming-OC-24GB-GDDR6X-Vit',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3090',
      url:
        'https://www.webhallen.com/se/product/323981-ASUS-TUF-GeForce-RTX-3090-24GB-Gaming',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3090',
      url:
        'https://www.webhallen.com/se/product/324100-ASUS-ROG-STRIX-GeForce-RTX-3090-24GB-Gaming',
    },
    {
      brand: 'asus',
      model: 'ekwb',
      series: '3090',
      url:
        'https://www.webhallen.com/se/product/328158-ASUS-EKWB-GeForce-RTX-3090-24GB',
    },
    {
      brand: 'gainward',
      model: 'phantom',
      series: '3090',
      url:
        'https://www.webhallen.com/se/product/328883-Gainward-GeForce-RTX-3090-Phantom-24G',
    },
    {
      brand: 'gainward',
      model: 'phantom gs',
      series: '3090',
      url:
        'https://www.webhallen.com/se/product/327270-Gainward-GeForce-RTX-3090-Phantom-GS-24G',
    },
    {
      brand: 'gainward',
      model: 'phoenix gs',
      series: '3090',
      url:
        'https://www.webhallen.com/se/product/324213-Gainward-GeForce-RTX-3090-Phoenix-GS-24GB',
    },
    {
      brand: 'gainward',
      model: 'phoenix',
      series: '3090',
      url:
        'https://www.webhallen.com/se/product/324212-Gainward-GeForce-RTX-3090-Phoenix-24GB',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3090',
      url:
        'https://www.webhallen.com/se/product/327543-Gigabyte-GeForce-RTX-3090-Vision-OC-24GB',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme',
      series: '3090',
      url:
        'https://www.webhallen.com/se/product/334310-Gigabyte-GeForce-RTX-3090-AORUS-XTREME-24GB',
    },
    {
      brand: 'gigabyte',
      model: 'turbo',
      series: '3090',
      url:
        'https://www.webhallen.com/se/product/328719-Gigabyte-GeForce-RTX-3090-Turbo-24GB',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3090',
      url:
        'https://www.webhallen.com/se/product/324088-Gigabyte-GeForce-RTX-3090-GAMING-OC-24GB',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3090',
      url:
        'https://www.webhallen.com/se/product/324087-Gigabyte-GeForce-RTX-3090-EAGLE-OC-24GB',
    },
    {
      brand: 'kfa2',
      model: 'sg',
      series: '3090',
      url:
        'https://www.webhallen.com/se/product/327568-KFA2-GeForce-RTX-3090-SG-24GB',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3090',
      url:
        'https://www.webhallen.com/se/product/327540-MSI-GeForce-RTX-3090-SUPRIM-X-24GB',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3090',
      url:
        'https://www.webhallen.com/se/product/324070-MSI-GeForce-RTX-3090-GAMING-X-TRIO-24GB',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3090',
      url:
        'https://www.webhallen.com/se/product/324069-MSI-GeForce-RTX-3090-VENTUS-3X-OC-24GB',
    },
    {
      brand: 'palit',
      model: 'gamerock oc',
      series: '3090',
      url:
        'https://www.webhallen.com/se/product/327835-Palit-GeForce-RTX-3090-GameRock-OC-24GB',
    },
    {
      brand: 'palit',
      model: 'gamerock',
      series: '3090',
      url:
        'https://www.webhallen.com/se/product/327541-Palit-GeForce-RTX-3090-GameRock-24GB',
    },
    {
      brand: 'palit',
      model: 'gaming pro oc',
      series: '3090',
      url:
        'https://www.webhallen.com/se/product/324209-Palit-GeForce-RTX-3090-Gaming-Pro-OC-24GB',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3090',
      url:
        'https://www.webhallen.com/se/product/324208-Palit-GeForce-RTX-3090-Gaming-Pro-24GB',
    },
    {
      brand: 'zotac',
      model: 'trinity oc',
      series: '3090',
      url:
        'https://www.webhallen.com/se/product/331727-Zotac-Gaming-GeForce-RTX-3090-Trinity-24GB-OC',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3090',
      url:
        'https://www.webhallen.com/se/product/324458-Zotac-Gaming-GeForce-RTX-3090-Trinity-24GB',
    },
    //3080
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.webhallen.com/se/product/324062-ASUS-TUF-GeForce-RTX-3080-10GB-Gaming-OC',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3080',
      url:
        'https://www.webhallen.com/se/product/324062-ASUS-TUF-GeForce-RTX-3080-10GB-Gaming-OC',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3080',
      url:
        'https://www.webhallen.com/se/product/324099-ASUS-ROG-STRIX-GeForce-RTX-3080-10GB-Gaming-OC',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3080',
      url:
        'https://www.webhallen.com/se/product/323980-ASUS-TUF-GeForce-RTX-3080-10GB-Gaming',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3080',
      url:
        'https://www.webhallen.com/se/product/324098-ASUS-ROG-STRIX-GeForce-RTX-3080-10GB-Gaming',
    },
    {
      brand: 'asus',
      model: 'ekwb',
      series: '3080',
      url:
        'https://www.webhallen.com/se/product/328157-ASUS-EKWB-GeForce-RTX-3080-10GB',
    },
    {
      brand: 'gainward',
      model: 'phantom',
      series: '3080',
      url:
        'https://www.webhallen.com/se/product/327542-Gainward-GeForce-RTX-3080-Phantom-10G',
    },
    {
      brand: 'gainward',
      model: 'phantom gs',
      series: '3080',
      url:
        'https://www.webhallen.com/se/product/327271-Gainward-GeForce-RTX-3080-Phantom-GS-10G',
    },
    {
      brand: 'gainward',
      model: 'phoenix gs',
      series: '3080',
      url:
        'https://www.webhallen.com/se/product/324211-Gainward-GeForce-RTX-3080-Phoenix-GS-10GB',
    },
    {
      brand: 'gainward',
      model: 'phoenix',
      series: '3080',
      url:
        'https://www.webhallen.com/se/product/324210-Gainward-GeForce-RTX-3080-Phoenix-10GB',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080',
      url:
        'https://www.webhallen.com/se/product/324086-Gigabyte-GeForce-RTX-3080-GAMING-OC-10GB',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme',
      series: '3080',
      url:
        'https://www.webhallen.com/se/product/329961-Gigabyte-GeForce-RTX-3080-AORUS-XTREME-10GB',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3080',
      url:
        'https://www.webhallen.com/se/product/327742-Gigabyte-GeForce-RTX-3080-AORUS-MASTER-10GB',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3080',
      url:
        'https://www.webhallen.com/se/product/325941-Gigabyte-GeForce-RTX-3080-Vision-OC-10GB',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3080',
      url:
        'https://www.webhallen.com/se/product/324085-Gigabyte-GeForce-RTX-3080-EAGLE-OC-10GB',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3080',
      url:
        'https://www.webhallen.com/se/product/327539-MSI-GeForce-RTX-3080-SUPRIM-X-10GB',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url:
        'https://www.webhallen.com/se/product/324068-MSI-GeForce-RTX-3080-GAMING-X-TRIO-10GB',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url:
        'https://www.webhallen.com/se/product/324067-MSI-GeForce-RTX-3080-VENTUS-3X-OC-10GB',
    },
    {
      brand: 'palit',
      model: 'gamerock oc',
      series: '3080',
      url:
        'https://www.webhallen.com/se/product/327275-Palit-GeForce-RTX-3080-GameRock-10G-OC',
    },
    {
      brand: 'palit',
      model: 'gamerock',
      series: '3080',
      url:
        'https://www.webhallen.com/se/product/327274-Palit-GeForce-RTX-3080-GameRock-10G',
    },
    {
      brand: 'palit',
      model: 'gaming pro oc',
      series: '3080',
      url:
        'https://www.webhallen.com/se/product/324207-Palit-GeForce-RTX-3080-Gaming-Pro-OC-10GB',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3080',
      url:
        'https://www.webhallen.com/se/product/324204-Palit-GeForce-RTX-3080-Gaming-Pro-10GB',
    },
    {
      brand: 'zotac',
      model: 'amp holo',
      series: '3080',
      url:
        'https://www.webhallen.com/se/product/325477-Zotac-Gaming-GeForce-RTX-3080-AMP-HOLO',
    },
    {
      brand: 'zotac',
      model: 'trinity oc',
      series: '3080',
      url:
        'https://www.webhallen.com/se/product/325476-Zotac-Gaming-GeForce-RTX-3080-Trinity-10GB-OC',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3080',
      url:
        'https://www.webhallen.com/se/product/324456-Zotac-Gaming-GeForce-RTX-3080-Trinity-10GB',
    },
    //3070
    {
      brand: 'zotac',
      model: 'twin edge oc white',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/328851-Zotac-Gaming-GeForce-RTX-3070-Twin-Edge-8GB-OC-White-Edition',
    },
    {
      brand: 'zotac',
      model: 'amp holo',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/329146-Zotac-GeForce-RTX-3070-AMP-HOLO-8GB',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/325475-Zotac-Gaming-GeForce-RTX-3070-Twin-Edge-8GB-OC',
    },
    {
      brand: 'zotac',
      model: 'twin edge',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/325474-Zotac-Gaming-GeForce-RTX-3070-Twin-Edge-8GB',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/324456-Zotac-Gaming-GeForce-RTX-3080-Trinity-10GB',
    },
    {
      brand: 'palit',
      model: 'gaming pro oc',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/327278-Palit-GeForce-RTX-3070-GamingPro-OC-8GB',
    },
    {
      brand: 'palit',
      model: 'gamerock oc',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/329792-Palit-GeForce-RTX-3070-GameRock-OC-8G',
    },
    {
      brand: 'palit',
      model: 'gamerock',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/329427-Palit-GeForce-RTX-3070-GameRock-8G',
    },
    {
      brand: 'palit',
      model: 'jetstream oc',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/329426-Palit-GeForce-RTX-3070-Jetstream-OC-8GB',
    },
    {
      brand: 'palit',
      model: 'jetstream',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/328561-Palit-GeForce-RTX-3070-Jetstream-8GB',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/327258-Palit-GeForce-RTX-3070-GamingPro-8GB',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/327836-MSI-GeForce-RTX-3070-SUPRIM-X-8GB',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/324066-MSI-GeForce-RTX-3070-GAMING-X-TRIO-8GB',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/324065-MSI-GeForce-RTX-3070-VENTUS-3X-OC-8GB',
    },
    {
      brand: 'msi',
      model: 'ventus 2x oc',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/324064-MSI-GeForce-RTX-3070-VENTUS-2X-OC-8GB',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/326419-Gigabyte-GeForce-RTX-3070-GAMING-OC-8GB',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/327738-Gigabyte-GeForce-RTX-3070-AORUS-MASTER-8GB',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/327736-Gigabyte-GeForce-RTX-3070-Vision-OC-8GB',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/327463-Gigabyte-GeForce-RTX-3070-Eagle-OC-8GB',
    },
    {
      brand: 'gainward',
      model: 'phantom gs',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/328887-Gainward-GeForce-RTX-3070-Phantom-GS-8GB',
    },
    {
      brand: 'gainward',
      model: 'phantom',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/328886-Gainward-GeForce-RTX-3070-Phantom-8GB',
    },
    {
      brand: 'gainward',
      model: 'phoenix',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/328885-Gainward-GeForce-RTX-3070-Phoenix-8GB',
    },
    {
      brand: 'gainward',
      model: 'phoenix gs',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/327260-Gainward-GeForce-RTX-3070-Phoenix-GS-8GB',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/325817-ASUS-TUF-GeForce-RTX-3070-8GB-Gaming-OC',
    },
    {
      brand: 'asus',
      model: 'dual oc',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/324223-ASUS-GeForce-RTX-3070-Dual-OC-8GB',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/324215-ASUS-ROG-STRIX-GeForce-RTX-3070-Gaming-OC-8GB',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/324214-ASUS-ROG-STRIX-GeForce-RTX-3070-Gaming-8GB',
    },
    {
      brand: 'asus',
      model: 'strix oc white',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/329037-ASUS-ROG-STRIX-GeForce-RTX-3070-Gaming-OC-8GB-Vit',
    },
    {
      brand: 'asus',
      model: 'strix white',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/329038-ASUS-ROG-STRIX-GeForce-RTX-3070-Gaming-8GB-Vit',
    },
    {
      brand: 'asus',
      model: 'ekwb',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/329031-ASUS-GeForce-RTX-3070-EK-WaterBlocks',
    },
    {
      brand: 'asus',
      model: 'turbo',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/331002-ASUS-GeForce-RTX-3070-Turbo-8GB',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/325816-ASUS-TUF-GeForce-RTX-3070-8GB-Gaming',
    },
    {
      brand: 'asus',
      model: 'dual',
      series: '3070',
      url:
        'https://www.webhallen.com/se/product/324222-ASUS-GeForce-RTX-3070-Dual-8GB',
    },
    //3060Ti
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3060ti',
      url:
        'https://www.webhallen.com/se/product/328145-ASUS-ROG-STRIX-GeForce-RTX-3060Ti-OC-8GB',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3060ti',
      url:
        'https://www.webhallen.com/se/product/328143-ASUS-TUF-GeForce-RTX-3060Ti-OC-8GB',
    },
    {
      brand: 'asus',
      model: 'dual oc',
      series: '3060ti',
      url:
        'https://www.webhallen.com/se/product/328141-ASUS-GeForce-RTX-3060Ti-Dual-OC-8GB',
    },
    {
      brand: 'asus',
      model: 'dual mini oc',
      series: '3060ti',
      url:
        'https://www.webhallen.com/se/product/329927-ASUS-GeForce-RTX-3060Ti-Dual-MINI-OC-8GB',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3060ti',
      url:
        'https://www.webhallen.com/se/product/328144-ASUS-ROG-STRIX-GeForce-RTX-3060Ti-8GB',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3060ti',
      url:
        'https://www.webhallen.com/se/product/328142-ASUS-TUF-GeForce-RTX-3060Ti-8GB',
    },
    {
      brand: 'asus',
      model: 'dual',
      series: '3060ti',
      url:
        'https://www.webhallen.com/se/product/328140-ASUS-GeForce-RTX-3060Ti-Dual-8GB',
    },
    {
      brand: 'gainward',
      model: 'ghost oc',
      series: '3060ti',
      url:
        'https://www.webhallen.com/se/product/328148-Gainward-GeForce-RTX-3060Ti-Ghost-OC-8GB',
    },
    {
      brand: 'gainward',
      model: 'ghost',
      series: '3060ti',
      url:
        'https://www.webhallen.com/se/product/328147-Gainward-GeForce-RTX-3060Ti-Ghost-8GB',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc pro',
      series: '3060ti',
      url:
        'https://www.webhallen.com/se/product/329771-Gigabyte-GeForce-RTX-3060Ti-Gaming-OC-PRO-8GB',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3060ti',
      url:
        'https://www.webhallen.com/se/product/328904-Gigabyte-GeForce-RTX-3060Ti-Gaming-OC-8GB',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3060ti',
      url:
        'https://www.webhallen.com/se/product/328903-Gigabyte-GeForce-RTX-3060Ti-Eagle-OC-8GB',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3060ti',
      url:
        'https://www.webhallen.com/se/product/328765-MSI-GeForce-RTX-3060-Ti-GAMING-X-TRIO',
    },
    {
      brand: 'msi',
      model: 'gaming x',
      series: '3060ti',
      url:
        'https://www.webhallen.com/se/product/331557-MSI-GeForce-RTX-3060-Ti-GAMING-X',
    },
    {
      brand: 'msi',
      model: 'ventus 2x oc',
      series: '3060ti',
      url:
        'https://www.webhallen.com/se/product/329530-MSI-GeForce-RTX-3060-Ti-VENTUS-2X-OC-v1',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3060ti',
      url:
        'https://www.webhallen.com/se/product/328766-MSI-GeForce-RTX-3060-Ti-VENTUS-3X-OC',
    },
    {
      brand: 'msi',
      model: 'ventus 2x oc',
      series: '3060ti',
      url:
        'https://www.webhallen.com/se/product/328764-MSI-GeForce-RTX-3060-Ti-VENTUS-2X-OC',
    },
    {
      brand: 'palit',
      model: 'gaming pro oc',
      series: '3060ti',
      url:
        'https://www.webhallen.com/se/product/329791-Palit-GeForce-RTX-3060Ti-Gaming-Pro-OC-8GB',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3060ti',
      url:
        'https://www.webhallen.com/se/product/329790-Palit-GeForce-RTX-3060Ti-Gaming-Pro-8GB',
    },
    {
      brand: 'palit',
      model: 'dual',
      series: '3060ti',
      url:
        'https://www.webhallen.com/se/product/329788-Palit-GeForce-RTX-3060Ti-Dual-8GB',
    },
    {
      brand: 'palit',
      model: 'dual oc',
      series: '3060ti',
      url:
        'https://www.webhallen.com/se/product/328146-Palit-GeForce-RTX-3060Ti-Dual-OC-8GB',
    },
    {
      brand: 'zotac',
      model: 'twin edge',
      series: '3060ti',
      url:
        'https://www.webhallen.com/se/product/328699-Zotac-GeForce-RTX-3060Ti-Twin-Edge-8GB',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3060ti',
      url:
        'https://www.webhallen.com/se/product/328700-Zotac-GeForce-RTX-3060Ti-Twin-Edge-OC-8GB',
    },
  ],
  name: 'webhallen-se',
};
