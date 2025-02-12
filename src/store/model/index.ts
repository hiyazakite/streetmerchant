import {config, defaultStoreData} from '../../config';
import {AmazonDe} from './amazon-de';
import {AmdDe} from './amd-de';
import {AsusDe} from './asus-de';
import {DustinHomeNO} from './dustinhome-no';
import {EuronicsDE} from './euronics-de';
import {EvgaEu} from './evga-eu';
import {Globaldata} from './globaldata';
import {Inet} from './inet-se';
import {KomplettSE} from './komplett-se';
import {Mediamarkt} from './mediamarkt';
import {Mindfactory} from './mindfactory';
import {NetonnetSE} from './netonnet-se';
import {NvidiaDE} from './nvidia-de';
import {ProshopSE} from './proshop-se';
import {Webhallen} from './webhallen-se';
import {Store} from './store';
import {logger} from '../../logger';
import chalk from 'chalk';

export const storeList = new Map([
  [AmazonDe.name, AmazonDe],
  [AmdDe.name, AmdDe],
  [AsusDe.name, AsusDe],
  [DustinHomeNO.name, DustinHomeNO],
  [EuronicsDE.name, EuronicsDE],
  [EvgaEu.name, EvgaEu],
  [Globaldata.name, Globaldata],
  [Inet.name, Inet],
  [KomplettSE.name, KomplettSE],
  [Mediamarkt.name, Mediamarkt],
  [Mindfactory.name, Mindfactory],
  [NetonnetSE.name, NetonnetSE],
  [NvidiaDE.name, NvidiaDE],
  [ProshopSE.name, ProshopSE],
  [Webhallen.name, Webhallen],
]);

const brands = new Set();
const models = new Set();
const series = new Set();
const stores = new Map();

function filterBrandsSeriesModels() {
  brands.clear();
  series.clear();
  models.clear();

  for (const store of storeList.values()) {
    for (const link of store.links) {
      brands.add(link.brand);
      series.add(link.series);
      models.add(link.model);
    }

    if (store.minPageSleep === undefined) {
      store.minPageSleep = defaultStoreData.minPageSleep;
    }

    if (store.maxPageSleep === undefined) {
      store.maxPageSleep = defaultStoreData.maxPageSleep;
    }
  }
}

function printConfig() {
  if (config.store.showOnlyBrands.length > 0) {
    logger.info(`ℹ selected brands: ${config.store.showOnlyBrands.join(', ')}`);
  }

  if (config.store.showOnlyModels.length > 0) {
    logger.info(
      `ℹ selected models: ${config.store.showOnlyModels
        .map(entry => {
          return entry.series
            ? entry.name + ' (' + entry.series + ')'
            : entry.name;
        })
        .join(', ')}`
    );
  }

  if (config.store.showOnlySeries.length > 0) {
    logger.info(`ℹ selected series: ${config.store.showOnlySeries.join(', ')}`);
  }

  if (config.store.stores.length > 0) {
    const stores = darkenEmptyStores();
    logger.info(`ℹ selected stores: ${stores.names.join(', ')}`);

    if (stores.anyExcluded) {
      logger.warn(
        'ℹ some of the selected stores (grayed out) dont have what you are looking for'
      );
    }
  }
}

function darkenEmptyStores(): {names: string[]; anyExcluded: boolean} {
  let anyExcluded = false;
  const selectedStores = config.store.stores.map(store => store.name);

  const names = selectedStores.map(selected => {
    const storeConfig = storeList.get(selected);
    const hasAny =
      storeConfig?.links.some(
        l =>
          (config.store.showOnlySeries?.includes(l.series) ?? false) ||
          config.store.showOnlyBrands?.includes(l.brand ?? false) ||
          (config.store.showOnlyModels?.map(m => m.name).includes(l.model) ??
            false)
      ) ?? false;

    anyExcluded = anyExcluded || !hasAny;
    return hasAny ? selected : chalk.gray(selected);
  });
  return {names, anyExcluded};
}

function warnIfStoreDeprecated(store: Store) {
  switch (store.name) {
    case 'evga':
      logger.warn(
        `${store.name} is deprecated since they only support queuing`
      );
      break;
    default:
  }
}

export function updateStores() {
  stores.clear();

  for (const storeData of config.store.stores) {
    const store = storeList.get(storeData.name);

    if (store) {
      warnIfStoreDeprecated(store);
      stores.set(storeData.name, store);
      store.minPageSleep = storeData.minPageSleep;
      store.maxPageSleep = storeData.maxPageSleep;
      store.proxyList = storeData.proxyList;
    } else {
      logger.warn(`No store named ${storeData.name}, skipping.`);
    }
  }

  filterBrandsSeriesModels();
  printConfig();
}

updateStores();

export function getAllBrands() {
  return [...brands];
}

export function getAllSeries() {
  return [...series];
}

export function getAllModels() {
  return [...models];
}

export function getStores() {
  return stores;
}

export * from './store';
