import {Store} from './store';

export const ProshopSE: Store = {
  currency: 'kr.',
  labels: {
    inStock: {
      container:
        'section.box.box-body.product-stock > ul:nth-child(2) > li > label > span',
      text: ['I lager'],
    },
    outOfStock: {
      container:
        'section.box.box-body.product-stock > ul:nth-child(2) > li > label > span',
      text: ['Slutsåld'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.inet.se/produkt/5412019/asrock-radeon-rx-6900-xt-16gb-phantom-gaming-d-oc',
    },
    //3090
    {
      brand: 'asus',
      model: 'ekwb',
      series: '3090',
      url:
        'https://www.proshop.se/Grafikkort/ASUS-GeForce-RTX-3090-EK-24GB-GDDR6X-RAM-Grafikkort/2887569',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3090',
      url:
        'https://www.proshop.se/Grafikkort/ASUS-GeForce-RTX-3090-ROG-STRIX-24GB-GDDR6X-RAM-Grafikkort/2876865',
    },
    {
      brand: 'asus',
      model: 'strix white',
      series: '3090',
      url:
        'https://www.proshop.se/Grafikkort/ASUS-GeForce-RTX-3090-ROG-STRIX-White-24GB-GDDR6X-RAM-Grafikkort/2911581',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3090',
      url:
        'https://www.proshop.se/Grafikkort/ASUS-GeForce-RTX-3090-ROG-STRIX-OC-24GB-GDDR6X-RAM-Grafikkort/2876867'
    },
    {
      brand: 'asus',
      model: 'strix oc white',
      series: '3090',
      url:
        'https://www.proshop.se/Grafikkort/ASUS-GeForce-RTX-3090-ROG-STRIX-OC-White-24GB-GDDR6X-RAM-Grafikkort/2911582',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3090',
      url:
        'https://www.proshop.se/Grafikkort/ASUS-GeForce-RTX-3090-TUF-24GB-GDDR6X-RAM-Grafikkort/2876764',
    },
    {
      brand: 'gigabyte',
      model: 'aorus',
      series: '3090',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3090-AORUS-Gaming-Box-24GB-GDDR6X-RAM-Grafikkort/2911226',
    },
    {
      brand: 'gigabyte',
      model: 'aorus',
      series: '3090',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3090-AORUS-WaterForce-WB-24GB-GDDR6X-RAM-Grafikkort/2878405',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3090',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3090-AORUS-Master-24GB-GDDR6X-RAM-Grafikkort/2876840',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme',
      series: '3090',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3090-AORUS-Xtreme-24GB-GDDR6X-RAM-Grafikkort/2876839',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme',
      series: '3090',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3090-AORUS-WaterForce-Xtreme-24GB-GDDR6X-RAM-Grafikkort/2878404',
    },
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '3090',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3090-EAGLE-24GB-GDDR6X-RAM-Grafikkort/2878406',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3090',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3090-EAGLE-OC-24GB-GDDR6X-RAM-Grafikkort/2876841',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3090',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3090-GAMING-OC-24GB-GDDR6X-RAM-Grafikkort/2876842',
    },
    {
      brand: 'gigabyte',
      model: 'turbo',
      series: '3090',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3090-Turbo-24GB-GDDR6X-RAM-Grafikkort/2878410',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3090',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3090-VISION-OC-24GB-GDDR6X-RAM-Grafikkort/2878413',
    },
    {
      brand: 'inno3d',
      model: 'gaming x3',
      series: '3090',
      url:
        'https://www.proshop.se/Grafikkort/Inno3D-GeForce-RTX-3090-GAMING-X3-24GB-GDDR6X-RAM-Grafikkort/2878977',
    },
    {
      brand: 'inno3d',
      model: 'ichill frostbite',
      series: '3090',
      url:
        'https://www.proshop.se/Grafikkort/Inno3D-GeForce-RTX-3090-iCHILL-Frostbite-24GB-GDDR6X-RAM-Grafikkort/2887323',
    },
    {
      brand: 'inno3d',
      model: 'ichill x3',
      series: '3090',
      url:
        'https://www.proshop.se/Grafikkort/Inno3D-GeForce-RTX-3090-iCHILL-X3-24GB-GDDR6X-RAM-Grafikkort/2878978',
    },
    {
      brand: 'inno3d',
      model: 'ichill x4',
      series: '3090',
      url:
        'https://www.proshop.se/Grafikkort/Inno3D-GeForce-RTX-3090-iCHILL-X4-24GB-GDDR6X-RAM-Grafikkort/2878979',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3090',
      url:
        'https://www.proshop.se/Grafikkort/MSI-GeForce-RTX-3090-GAMING-X-TRIO-24GB-GDDR6X-RAM-Grafikkort/2876881',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3090',
      url:
        'https://www.proshop.se/Grafikkort/MSI-GeForce-RTX-3090-SUPRIM-X-24GB-GDDR6X-RAM-Grafikkort/2885271',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3090',
      url:
        'https://www.proshop.se/Grafikkort/MSI-GeForce-RTX-3090-VENTUS-3X-OC-24GB-GDDR6X-RAM-Grafikkort/2876883',
    },
    //3080
    {
      brand: 'asus',
      model: 'ekwb',
      series: '3080',
      url:
        'https://www.proshop.se/Grafikkort/ASUS-GeForce-RTX-3080-EK-10GB-GDDR6X-RAM-Grafikkort/2887568',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3080',
      url:
        'https://www.proshop.se/Grafikkort/ASUS-GeForce-RTX-3080-ROG-STRIX-10GB-GDDR6X-RAM-Grafikkort/2876857',
    },
    {
      brand: 'asus',
      model: 'strix white',
      series: '3080',
      url:
        'https://www.proshop.se/Grafikkort/ASUS-GeForce-RTX-3080-ROG-STRIX-White-10GB-GDDR6X-RAM-Grafikkort/2911578',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3080',
      url:
        'https://www.proshop.se/Grafikkort/ASUS-GeForce-RTX-3080-ROG-STRIX-OC-10GB-GDDR6X-RAM-Grafikkort/2876859'
    },
    {
      brand: 'asus',
      model: 'strix oc white',
      series: '3080',
      url:
        'https://www.proshop.se/Grafikkort/ASUS-GeForce-RTX-3080-ROG-STRIX-OC-White-10GB-GDDR6X-RAM-Grafikkort/2911579',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3080',
      url:
        'https://www.proshop.se/Grafikkort/ASUS-GeForce-RTX-3080-TUF-10GB-GDDR6X-RAM-Grafikkort/2876763',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3080',
      url:
        'https://www.proshop.se/Grafikkort/ASUS-GeForce-RTX-3080-TUF-OC-10GB-GDDR6X-RAM-Grafikkort/2876861',
    },
    {
      brand: 'gigabyte',
      model: 'aorus',
      series: '3080',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3080-AORUS-Gaming-Box-10GB-GDDR6X-RAM-Grafikkort/2915139',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme',
      series: '3080',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3080-AORUS-Xtreme-10GB-GDDR6X-RAM-Grafikkort/2876836',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3080',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3080-AORUS-Master-10GB-GDDR6X-RAM-Grafikkort/2876835',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme',
      series: '3080',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3080-AORUS-WaterForce-WB-Xtreme-10GB-GDDR6X-RAM-Grafikkort/2878394',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme',
      series: '3080',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3080-AORUS-WaterForce-Xtreme-10GB-GDDR6X-RAM-Grafikkort/2878393',
    },
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '3080',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3080-EAGLE-10GB-GDDR6X-RAM-Grafikkort/2878395',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3080',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3080-EAGLE-OC-10GB-GDDR6X-RAM-Grafikkort/2876837',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3080-GAMING-OC-10GB-GDDR6X-RAM-Grafikkort/2876838',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3080-GAMING-OC-WaterForce-WB-10GB-GDDR6X-RAM-Grafikkort/2924958',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3080',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3080-VISION-OC-10GB-GDDR6X-RAM-Grafikkort/2878401',
    },
    {
      brand: 'inno3d',
      model: 'twin x2 oc',
      series: '3080',
      url:
        'https://www.proshop.se/Grafikkort/Inno3D-GeForce-RTX-3080-Twin-X2-OC-10GB-GDDR6X-RAM-Grafikkort/2878968',
    },
    {
      brand: 'inno3d',
      model: 'ichill frostbite',
      series: '3080',
      url:
        'https://www.proshop.se/Grafikkort/Inno3D-GeForce-RTX-3080-iCHILL-Frostbite-10GB-GDDR6X-RAM-Grafikkort/2887321',
    },
    {
      brand: 'inno3d',
      model: 'ichill x3',
      series: '3080',
      url:
        'https://www.proshop.se/Grafikkort/Inno3D-GeForce-RTX-3080-iCHILL-X3-10GB-GDDR6X-RAM-Grafikkort/2878969',
    },
    {
      brand: 'inno3d',
      model: 'ichill x4',
      series: '3080',
      url:
        'https://www.proshop.se/Grafikkort/Inno3D-GeForce-RTX-3080-iCHILL-X4-10GB-GDDR6X-RAM-Grafikkort/2878971',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url:
        'https://www.proshop.se/Grafikkort/MSI-GeForce-RTX-3080-GAMING-Z-TRIO-10GB-GDDR6X-RAM-Grafikkort/2935872',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3080',
      url:
        'https://www.proshop.se/Grafikkort/MSI-GeForce-RTX-3080-SUPRIM-X-10GB-GDDR6X-RAM-Grafikkort/2885270',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url:
        'https://www.proshop.se/Grafikkort/MSI-GeForce-RTX-3080-VENTUS-3X-OC-10GB-GDDR6X-RAM-Grafikkort/2876879',
    },
    //3070
    {
      brand: 'asus',
      model: 'dual',
      series: '3070',
      url:
        'https://www.proshop.se/Grafikkort/ASUS-GeForce-RTX-3070-DUAL-8GB-GDDR6-SDRAM-Grafikkort/2876851',
    },
    {
      brand: 'asus',
      model: 'dual oc',
      series: '3070',
      url:
        'https://www.proshop.se/Grafikkort/ASUS-GeForce-RTX-3070-DUAL-OC-8GB-GDDR6-SDRAM-Grafikkort/2876853',
    },
    {
      brand: 'asus',
      model: 'ekwb',
      series: '3070',
      url:
        'https://www.proshop.se/Grafikkort/ASUS-GeForce-RTX-3070-EK-8GB-GDDR6-SDRAM-Grafikkort/2911577',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3070',
      url:
        'https://www.proshop.se/Grafikkort/ASUS-GeForce-RTX-3070-ROG-STRIX-8GB-GDDR6-SDRAM-Grafikkort/2876843',
    },
    {
      brand: 'asus',
      model: 'strix white',
      series: '3070',
      url:
        'https://www.proshop.se/Grafikkort/ASUS-GeForce-RTX-3070-ROG-STRIX-White-8GB-GDDR6X-RAM-Grafikkort/2911574',
    },
    {
      brand: 'asus',
      model: 'strix oc white',
      series: '3070',
      url:
        'https://www.proshop.se/Grafikkort/ASUS-GeForce-RTX-3070-ROG-STRIX-OC-White-8GB-GDDR6X-RAM-Grafikkort/2911575',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3070',
      url:
        'https://www.proshop.se/Grafikkort/ASUS-GeForce-RTX-3070-TUF-8GB-GDDR6-SDRAM-Grafikkort/2876854',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3070',
      url:
        'https://www.proshop.se/Grafikkort/ASUS-GeForce-RTX-3070-TUF-OC-8GB-GDDR6-SDRAM-Grafikkort/2876856',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3070',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3070-AORUS-Master-8GB-GDDR6-SDRAM-Grafikkort/2878383',
    },
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '3070',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3070-EAGLE-8GB-GDDR6-SDRAM-Grafikkort/2878385',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3070',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3070-EAGLE-OC-8GB-GDDR6-SDRAM-Grafikkort/2878386',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3070',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3070-GAMING-OC-8GB-GDDR6-SDRAM-Grafikkort/2878390',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3070',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3070-VISION-OC-8GB-GDDR6-SDRAM-Grafikkort/2878392',
    },
    {
      brand: 'inno3d',
      model: 'twin x2 oc',
      series: '3070',
      url:
        'https://www.proshop.se/Grafikkort/Inno3D-GeForce-RTX-3070-Twin-X2-OC-8GB-GDDR6-SDRAM-Grafikkort/2883917',
    },
    {
      brand: 'inno3d',
      model: 'ichill x3',
      series: '3070',
      url:
        'https://www.proshop.se/Grafikkort/Inno3D-GeForce-RTX-3070-iCHILL-X3-8GB-GDDR6-SDRAM-Grafikkort/2883918',
    },
    {
      brand: 'inno3d',
      model: 'ichill x4',
      series: '3070',
      url:
        'https://www.proshop.se/Grafikkort/Inno3D-GeForce-RTX-3070-iCHILL-X4-8GB-GDDR6-SDRAM-Grafikkort/2883919',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3070',
      url:
        'https://www.proshop.se/Grafikkort/MSI-GeForce-RTX-3070-GAMING-X-TRIO-8GB-GDDR6-SDRAM-Grafikkort/2876871',
    },
    {
      brand: 'msi',
      model: 'suprim',
      series: '3070',
      url:
        'https://www.proshop.se/Grafikkort/MSI-GeForce-RTX-3070-SUPRIM-8GB-GDDR6-SDRAM-Grafikkort/2908888',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3070',
      url:
        'https://www.proshop.se/Grafikkort/MSI-GeForce-RTX-3070-SUPRIM-X-8GB-GDDR6-SDRAM-Grafikkort/2885269',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3070',
      url:
        'https://www.proshop.se/Grafikkort/MSI-GeForce-RTX-3070-VENTUS-3X-OC-8GB-GDDR6-SDRAM-Grafikkort/2876875',
    },
    //3060 Ti
    {
      brand: 'asus',
      model: 'dual',
      series: '3060ti',
      url:
        'https://www.proshop.se/Grafikkort/ASUS-GeForce-RTX-3060-Ti-DUAL-8GB-GDDR6-SDRAM-Grafikkort/2886988',
    },
    {
      brand: 'asus',
      model: 'dual mini',
      series: '3060ti',
      url:
        'https://www.proshop.se/Grafikkort/ASUS-GeForce-RTX-3060-Ti-DUAL-MINI-8GB-GDDR6-SDRAM-Grafikkort/2914081',
    },
    {
      brand: 'asus',
      model: 'dual mini oc',
      series: '3060ti',
      url:
        'https://www.proshop.se/Grafikkort/ASUS-GeForce-RTX-3060-Ti-DUAL-MINI-OC-8GB-GDDR6-SDRAM-Grafikkort/2914082',
    },
    {
      brand: 'asus',
      model: 'dual oc',
      series: '3060ti',
      url:
        'https://www.proshop.se/Grafikkort/ASUS-GeForce-RTX-3060-Ti-DUAL-OC-8GB-GDDR6-SDRAM-Grafikkort/2886990',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3060ti',
      url:
        'https://www.proshop.se/Grafikkort/ASUS-GeForce-RTX-3070-ROG-STRIX-8GB-GDDR6-SDRAM-Grafikkort/2876843',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3060ti',
      url:
        'https://www.proshop.se/Grafikkort/ASUS-GeForce-RTX-3060-Ti-ROG-STRIX-OC-8GB-GDDR6-SDRAM-Grafikkort/2886982',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3060ti',
      url:
        'https://www.proshop.se/Grafikkort/ASUS-GeForce-RTX-3060-Ti-TUF-8GB-GDDR6-SDRAM-Grafikkort/2886984',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3060ti',
      url:
        'https://www.proshop.se/Grafikkort/ASUS-GeForce-RTX-3060-Ti-TUF-OC-8GB-GDDR6-SDRAM-Grafikkort/2886986',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3060ti',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3060-Ti-AORUS-Master-8GB-GDDR6-SDRAM-Grafikkort/2887734',
    },
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '3060ti',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3060-Ti-EAGLE-8GB-GDDR6-SDRAM-Grafikkort/2887735',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3060ti',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3060-Ti-EAGLE-OC-8GB-GDDR6-SDRAM-Grafikkort/2887736',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3060ti',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3060-Ti-GAMING-OC-8GB-GDDR6-SDRAM-Grafikkort/2887737',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc pro',
      series: '3060ti',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3060-Ti-GAMING-OC-PRO-8GB-GDDR6-SDRAM-Grafikkort/2887738',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3060ti',
      url:
        'https://www.proshop.se/Grafikkort/GIGABYTE-GeForce-RTX-3060-Ti-VISION-OC-8GB-GDDR6-SDRAM-Grafikkort/2924959',
    },
    {
      brand: 'inno3d',
      model: 'twin x2 oc',
      series: '3060ti',
      url:
        'https://www.proshop.se/Grafikkort/Inno3D-GeForce-RTX-3060-Ti-Twin-X2-OC-8GB-GDDR6-SDRAM-Grafikkort/2908273',
    },
    {
      brand: 'inno3d',
      model: 'ichill x3',
      series: '3060ti',
      url:
        'https://www.proshop.se/Grafikkort/Inno3D-GeForce-RTX-3060-Ti-iCHILL-X3-8GB-GDDR6-SDRAM-Grafikkort/2908274',
    },
    {
      brand: 'inno3d',
      model: 'ichill x4',
      series: '3060ti',
      url:
        'https://www.proshop.se/Grafikkort/Inno3D-GeForce-RTX-3070-iCHILL-X4-8GB-GDDR6-SDRAM-Grafikkort/2883919',
    },
    {
      brand: 'msi',
      model: 'gaming x',
      series: '3060ti',
      url:
        'https://www.proshop.se/Grafikkort/MSI-GeForce-RTX-3060-Ti-GAMING-X-8GB-GDDR6-SDRAM-Grafikkort/2918560',
    },
    {
      brand: 'msi',
      model: 'ventus 2x',
      series: '3060ti',
      url:
        'https://www.proshop.se/Grafikkort/MSI-GeForce-RTX-3060-Ti-VENTUS-2X-OCV1-8GB-GDDR6-SDRAM-Grafikkort/2911560',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3060ti',
      url:
        'https://www.proshop.se/Grafikkort/MSI-GeForce-RTX-3060-Ti-VENTUS-3X-OC-8GB-GDDR6-SDRAM-Grafikkort/2910052',
    },
  ],
  name: 'proshop-se',
};
