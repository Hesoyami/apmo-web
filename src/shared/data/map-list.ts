const markers = [
  ['test', [100, 0], 42, 8, 0, 1, '', []],
  ['airport', [4574.73, 10209], 42, 8, 0, 1, '', []],
  ['zero', [-10.2057, 20011.5], 42, 8, 0, 1, '', []],
  ['15360', [0, 15360], 42, 8, 0, 1, '', []],
];

const mapList = [
  {
    id: '1',
    scale: '0.1667',
    width: '122976',
    height: '122910',
    width_o: '20480',
    height_o: '20480',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2014-04-09 20:51:23',
    edited_on: '2016-09-17 18:43:39',
    name: 'Reshmaan',
    description: 'Reshmaan Province',
    dir: 'reshmaan',
    image: '/maps/chernarus-autumn.jpg',
    author: 'Bohemia Interactive',
  },
  {
    id: '2',
    scale: '0.1250',
    width: '122936',
    height: '122912',
    width_o: '15360',
    height_o: '15360',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2014-04-10 12:25:34',
    edited_on: '2016-09-17 18:43:39',
    name: 'Chernarus',
    description: 'Chernarus',
    dir: 'chernarus',
    image: '/maps/chernarus-autumn.jpg',
    author: 'Bohemia Interactive',
  },
  {
    id: '3',
    scale: '0.1000',
    width: '61476',
    height: '61476',
    width_o: '5120',
    height_o: '5120',
    offset: '300',
    zoom: '8',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2014-04-10 12:25:57',
    edited_on: '2016-09-17 18:43:39',
    name: 'Utes',
    description: 'Utes',
    dir: 'utes',
    image: '/maps/chernarus-autumn.jpg',
    author: 'Bohemia Interactive',
  },
  {
    id: '4',
    scale: '0.0333',
    width: '61590',
    height: '61590',
    width_o: '2048',
    height_o: '2048',
    offset: '300',
    zoom: '8',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2014-04-10 12:27:08',
    edited_on: '2016-09-17 18:43:39',
    name: 'Shapur_baf',
    description: 'Shapur',
    dir: 'shapur',
    image: '/maps/chernarus-autumn.jpg',
    author: 'Bohemia Interactive',
  },
  {
    id: '5',
    scale: '1.0000',
    width: null,
    height: null,
    width_o: null,
    height_o: null,
    offset: '300',
    zoom: '8',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2014-04-10 12:27:33',
    edited_on: '2016-09-17 18:43:39',
    name: 'WL_Route191',
    description: 'Schwemlitz',
    dir: 'schwemlitz',
    image: '/maps/chernarus-autumn.jpg',
    author: 'Bohemia Interactive',
  },
  {
    id: '6',
    scale: '0.1000',
    width: '128060',
    height: '128060',
    width_o: '12800',
    height_o: '12800',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2014-04-10 12:27:52',
    edited_on: '2016-09-17 18:43:39',
    name: 'Takistan',
    description: 'Takistan',
    dir: 'takistan',
    image: '/maps/chernarus-autumn.jpg',
    author: 'Bohemia Interactive',
  },
  {
    id: '7',
    scale: '0.0333',
    width: '61740',
    height: '61590',
    width_o: '2048',
    height_o: '2048',
    offset: '300',
    zoom: '8',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2014-04-10 12:28:36',
    edited_on: '2016-09-17 18:43:39',
    name: 'ProvingGrounds_PMC',
    description: 'Proving Grounds',
    dir: 'provinggrounds',
    image: '/maps/chernarus-autumn.jpg',
    author: 'Bohemia Interactive',
  },
  {
    id: '8',
    scale: '0.1000',
    width: '122940',
    height: '123000',
    width_o: '12294',
    height_o: '12300',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2014-04-10 12:29:10',
    edited_on: '2016-09-17 18:43:39',
    name: 'mbg_celle2',
    description: 'Celle 2',
    dir: 'celle2',
    image: '/maps/chernarus-autumn.jpg',
    author: 'Bohemia Interactive',
  },
  {
    id: '9',
    scale: '0.1000',
    width: '102400',
    height: '102400',
    width_o: '10240',
    height_o: '10240',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2014-04-10 12:30:21',
    edited_on: '2016-09-17 18:43:39',
    name: 'IsolaDiCapraia',
    description: 'Isola di Capraia',
    dir: 'capraia',
    image: '/maps/chernarus-autumn.jpg',
    author: 'Bohemia Interactive',
  },
  {
    id: '10',
    scale: '0.0833',
    width: '61464',
    height: '61452',
    width_o: '5120',
    height_o: '5120',
    offset: '300',
    zoom: '8',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2014-04-10 12:30:47',
    edited_on: '2016-09-17 18:43:39',
    name: 'ThirskW',
    description: 'Thirsk Winter',
    dir: 'thirsk',
  },
  {
    id: '11',
    scale: '0.1667',
    width: '122958',
    height: '122898',
    width_o: '20480',
    height_o: '20480',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2014-04-10 12:31:29',
    edited_on: '2016-09-17 18:43:39',
    name: 'FDF_Isle1_a',
    description: 'Podagorsk',
    dir: 'podagorsk',
  },
  {
    id: '12',
    scale: '0.0833',
    width: '98304',
    height: '98304',
    width_o: '8192',
    height_o: '8192',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2014-04-10 12:33:19',
    edited_on: '2016-09-17 18:43:39',
    name: 'Caribou',
    description: 'Caribou Frontier',
    dir: 'caribou',
  },
  {
    id: '13',
    scale: '0.1000',
    width: '102540',
    height: '102540',
    width_o: '10240',
    height_o: '10240',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2014-04-10 12:33:39',
    edited_on: '2016-09-17 18:43:39',
    name: 'Fallujah',
    description: 'Fallujah',
    dir: 'fallujah',
  },
  {
    id: '14',
    scale: '0.0333',
    width: '61530',
    height: '61590',
    width_o: '2048',
    height_o: '2048',
    offset: '300',
    zoom: '8',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2014-04-10 12:34:04',
    edited_on: '2016-09-17 18:43:39',
    name: 'Desert_E',
    description: 'Desert',
    dir: 'desert',
  },
  {
    id: '15',
    scale: '0.0833',
    width: '98376',
    height: '98388',
    width_o: '8192',
    height_o: '8192',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2014-04-10 12:34:44',
    edited_on: '2016-09-17 18:43:39',
    name: 'Zargabad',
    description: 'Zargabad',
    dir: 'zargabad',
  },
  {
    id: '16',
    scale: '0.1667',
    width: '122922',
    height: '122904',
    width_o: '20480',
    height_o: '20480',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2014-05-14 15:51:40',
    edited_on: '2016-09-17 18:43:39',
    name: 'smd_sahrani_A2',
    description: 'Sahrani',
    dir: 'sahrani',
  },
  {
    id: '17',
    scale: '1.0000',
    width: null,
    height: null,
    width_o: null,
    height_o: null,
    offset: '300',
    zoom: '8',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2014-05-22 19:18:43',
    edited_on: '2016-09-17 18:43:39',
    name: 'WL_WRoute191',
    description: 'Schwemlitz Winter',
    dir: 'schwemlitz',
  },
  {
    id: '18',
    scale: '0.0833',
    width: '61464',
    height: '61452',
    width_o: '5120',
    height_o: '5120',
    offset: '300',
    zoom: '8',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2014-07-26 22:38:09',
    edited_on: '2016-09-17 18:43:39',
    name: 'Thirsk',
    description: 'Thirsk',
    dir: 'thirsk',
  },
  {
    id: '19',
    scale: '1.0000',
    width: null,
    height: null,
    width_o: null,
    height_o: null,
    offset: '300',
    zoom: '8',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2014-07-26 22:39:38',
    edited_on: '2016-09-17 18:43:39',
    name: 'torabora',
    description: 'Torabora',
    dir: 'torabora',
  },
  {
    id: '20',
    scale: '0.1667',
    width: '122946',
    height: '122946',
    width_o: '20480',
    height_o: '20480',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2014-07-26 22:41:17',
    edited_on: '2016-09-17 18:43:39',
    name: 'Clafghan',
    description: 'Clafghan',
    dir: 'clafghan',
  },
  {
    id: '21',
    scale: '0.0833',
    width: '61524',
    height: '61512',
    width_o: '5120',
    height_o: '5120',
    offset: '300',
    zoom: '8',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2014-08-25 17:04:46',
    edited_on: '2016-09-17 18:43:39',
    name: 'MCN_Aliabad',
    description: 'Aliabad Region',
    dir: 'aliabad',
  },
  {
    id: '22',
    scale: '0.1000',
    width: '102500',
    height: '102410',
    width_o: '10240',
    height_o: '10240',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2014-08-25 17:04:47',
    edited_on: '2016-09-17 18:43:39',
    name: 'fata',
    description: 'FATA',
    dir: 'fata',
  },
  {
    id: '23',
    scale: '0.1667',
    width: '123060',
    height: '122970',
    width_o: '20480',
    height_o: '20480',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2014-09-18 17:13:37',
    edited_on: '2016-09-17 18:43:39',
    name: 'Beketov',
    description: 'Beketov',
    dir: 'beketov',
  },
  {
    id: '24',
    scale: '0.1000',
    width: '76880',
    height: '76850',
    width_o: '7680',
    height_o: '7680',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2014-09-25 13:23:52',
    edited_on: '2016-09-17 18:43:39',
    name: 'Woodland_ACR',
    description: 'Bystrica',
    dir: 'bystrica',
  },
  {
    id: '25',
    scale: '0.1250',
    width: '122936',
    height: '122912',
    width_o: '15360',
    height_o: '15360',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2015-03-28 13:44:09',
    edited_on: '2016-09-17 18:43:39',
    name: 'Chernarus_Winter',
    description: 'Chernarus Winter',
    dir: 'chernarus',
  },
  {
    id: '26',
    scale: '1.0000',
    width: null,
    height: null,
    width_o: null,
    height_o: null,
    offset: '300',
    zoom: '8',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2015-08-23 12:01:18',
    edited_on: '2016-09-17 18:43:39',
    name: 'namalsk',
    description: 'Namalsk',
    dir: 'namalsk',
  },
  {
    id: '28',
    scale: '1.0000',
    width: null,
    height: null,
    width_o: null,
    height_o: null,
    offset: '300',
    zoom: '8',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2015-09-07 17:08:03',
    edited_on: '2016-09-17 18:43:39',
    name: 'Emita',
    description: 'Emita',
    dir: 'emita',
  },
  {
    id: '29',
    scale: '1.0000',
    width: null,
    height: null,
    width_o: null,
    height_o: null,
    offset: '300',
    zoom: '8',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2018-01-24 16:29:50',
    edited_on: '2018-01-24 16:29:50',
    name: 'BMFayshkhabur',
    description: 'Fayshkhabur',
    dir: 'fayshkhabur',
  },
  {
    id: '30',
    scale: '0.1667',
    width: '122976',
    height: '122886',
    width_o: '20480',
    height_o: '20480',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2018-01-24 16:29:50',
    edited_on: '2018-01-24 16:29:50',
    name: 'Napf',
    description: 'Napf',
    dir: 'napf',
  },
  {
    id: '32',
    scale: '1.0000',
    width: null,
    height: null,
    width_o: null,
    height_o: null,
    offset: '300',
    zoom: '8',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2018-01-24 16:29:50',
    edited_on: '2018-01-24 16:29:50',
    name: 'praa_av',
    description: 'Afgani Village',
    dir: 'afgani',
  },
  {
    id: '33',
    scale: '1.0000',
    width: null,
    height: null,
    width_o: null,
    height_o: null,
    offset: '300',
    zoom: '8',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2018-01-24 16:29:50',
    edited_on: '2018-01-24 16:29:50',
    name: 'wogis2',
    description: 'WOG Island №2',
    dir: 'wogisland2',
  },
  {
    id: '34',
    scale: '0.2500',
    width: '122964',
    height: '122884',
    width_o: '30720',
    height_o: '30720',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2018-01-25 13:29:47',
    edited_on: '2018-01-25 13:29:47',
    name: 'Altis',
    description: 'Altis',
    dir: 'altis',
  },
  {
    id: '35',
    scale: '0.1250',
    width: '122936',
    height: '122912',
    width_o: '15360',
    height_o: '15360',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2018-01-25 13:29:47',
    edited_on: '2018-01-25 13:29:47',
    name: 'Chernarus_Summer',
    description: 'Summer Chernarus',
    dir: 'chernarus',
  },
  {
    id: '36',
    scale: '0.1667',
    width: '61494',
    height: '61470',
    width_o: '10240',
    height_o: '10240',
    offset: '300',
    zoom: '8',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2018-01-25 13:29:47',
    edited_on: '2018-01-25 13:29:47',
    name: 'IslaDuala3',
    description: 'Isla Duala',
    dir: 'isladuala3',
  },
  {
    id: '37',
    scale: '0.1000',
    width: '128120',
    height: '128050',
    width_o: '12800',
    height_o: '12800',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2018-01-25 13:29:47',
    edited_on: '2018-01-25 13:29:47',
    name: 'Malden',
    description: 'Malden',
    dir: 'malden',
  },
  {
    id: '38',
    scale: '0.1250',
    width: '51264',
    height: '94680',
    width_o: '6400',
    height_o: '11820',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2018-01-25 13:29:47',
    edited_on: '2018-01-25 13:29:47',
    name: 'Mountains_ACR',
    description: 'Mountains ACR',
    dir: 'mountains-acr',
  },
  {
    id: '39',
    scale: '0.1667',
    width: '122976',
    height: '122886',
    width_o: '20480',
    height_o: '20480',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2018-01-25 13:29:47',
    edited_on: '2018-01-25 13:29:47',
    name: 'NapfWinter',
    description: 'Winter Napf',
    dir: 'napf',
  },
  {
    id: '40',
    scale: '0.0833',
    width: '61524',
    height: '61500',
    width_o: '5120',
    height_o: '5120',
    offset: '300',
    zoom: '8',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2018-01-25 13:29:47',
    edited_on: '2018-01-25 13:29:47',
    name: 'Porto',
    description: 'Porto',
    dir: 'porto',
  },
  {
    id: '41',
    scale: '0.1667',
    width: '122922',
    height: '122904',
    width_o: '20480',
    height_o: '20480',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2018-01-25 13:29:47',
    edited_on: '2018-01-25 13:29:47',
    name: 'Sara',
    description: 'Sahrani',
    dir: 'sahrani',
  },
  {
    id: '42',
    scale: '0.1000',
    width: '102500',
    height: '102500',
    width_o: '10240',
    height_o: '10240',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2018-01-25 13:29:47',
    edited_on: '2018-01-25 13:29:47',
    name: 'SaraLite',
    description: 'Southern Sahrani',
    dir: 'sahranilite',
  },
  {
    id: '43',
    scale: '0.1667',
    width: '122922',
    height: '122904',
    width_o: '20480',
    height_o: '20480',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2018-01-25 13:29:47',
    edited_on: '2018-01-25 13:29:47',
    name: 'Sara_DBE1',
    description: 'United Sahrani',
    dir: 'sahranidbe1',
  },
  {
    id: '44',
    scale: '0.1000',
    width: '82010',
    height: '81970',
    width_o: '8192',
    height_o: '8192',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2018-01-25 13:29:47',
    edited_on: '2018-01-25 13:29:47',
    name: 'Stratis',
    description: 'Stratis',
    dir: 'stratis',
  },
  {
    id: '45',
    scale: '0.1250',
    width: '122984',
    height: '122920',
    width_o: '15360',
    height_o: '15360',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2018-01-25 13:29:47',
    edited_on: '2018-01-25 13:29:47',
    name: 'Tanoa',
    description: 'Tanoa',
    dir: 'tanoa',
  },
  {
    id: '46',
    scale: '0.1667',
    width: '61500',
    height: '61470',
    width_o: '10240',
    height_o: '10240',
    offset: '300',
    zoom: '8',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2018-01-25 13:29:47',
    edited_on: '2018-01-25 13:29:47',
    name: 'abramia',
    description: 'Abramia',
    dir: 'abramia',
  },
  {
    id: '47',
    scale: '0.1667',
    width: '123000',
    height: '122922',
    width_o: '20480',
    height_o: '20480',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2018-01-25 13:29:47',
    edited_on: '2018-01-25 13:29:47',
    name: 'Lythium',
    description: 'Lythium',
    dir: 'lythium',
  },
  {
    id: '48',
    scale: '0.1000',
    width: '61476',
    height: '61476',
    width_o: '5120',
    height_o: '5120',
    offset: '300',
    zoom: '8',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2018-01-25 13:29:47',
    edited_on: '2018-01-25 13:29:47',
    name: 'Utes_winter',
    description: 'Utes Winter',
    dir: 'utes',
  },
  {
    id: '49',
    scale: '1.0000',
    width: null,
    height: null,
    width_o: null,
    height_o: null,
    offset: '300',
    zoom: '8',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2018-04-02 23:26:03',
    edited_on: '2018-04-02 23:26:03',
    name: 'Tembelan',
    description: 'Tembelan',
    dir: 'tembelan',
  },
  {
    id: '50',
    scale: '1.0000',
    width: null,
    height: null,
    width_o: null,
    height_o: null,
    offset: '300',
    zoom: '8',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2018-05-02 16:50:47',
    edited_on: '2018-05-02 16:50:47',
    name: 'hellanmaa',
    description: 'Hellanmaa',
    dir: 'hellanmaa',
  },
  {
    id: '51',
    scale: '1.0000',
    width: null,
    height: null,
    width_o: null,
    height_o: null,
    offset: '300',
    zoom: '8',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2018-05-03 09:17:34',
    edited_on: '2018-05-03 09:17:34',
    name: 'Sennoe',
    description: 'Sennoe',
    dir: 'Sennoe',
  },
  {
    id: '53',
    scale: '0.1667',
    width: '61482',
    height: '61458',
    width_o: '10240',
    height_o: '10240',
    offset: '300',
    zoom: '8',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2018-08-08 17:21:48',
    edited_on: '2018-08-08 17:21:48',
    name: 'Dingor',
    description: 'Dingor',
    dir: 'lingor',
  },
  {
    id: '54',
    scale: '0.0833',
    width: '98508',
    height: '98472',
    width_o: '8192',
    height_o: '8192',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2018-08-08 17:22:05',
    edited_on: '2018-08-08 17:22:05',
    name: 'Ruha',
    description: 'Ruha',
    dir: 'ruha',
  },
  {
    id: '55',
    scale: '0.1000',
    width: '103200',
    height: '102440',
    width_o: '10240',
    height_o: '10240',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2018-08-23 08:10:52',
    edited_on: '2018-08-23 08:10:52',
    name: 'lingor3',
    description: 'Lingor',
    dir: 'lingor',
  },
  {
    id: '56',
    scale: '0.1250',
    width: '123904',
    height: '122992',
    width_o: '15360',
    height_o: '15360',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2018-11-10 00:17:50',
    edited_on: '2018-11-10 00:17:50',
    name: 'WL_Rosche',
    description: 'Rosche',
    dir: 'rosche',
  },
  {
    id: '57',
    scale: '0.1250',
    width: '131152',
    height: '131168',
    width_o: '16384',
    height_o: '16384',
    offset: '300',
    zoom: '10',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2019-06-15 23:18:31',
    edited_on: '2019-06-15 23:18:31',
    name: 'tem_kujari',
    description: 'Kujari',
    dir: 'kujari',
  },
  {
    id: '58',
    scale: '0.1250',
    width: '102432',
    height: '102432',
    width_o: '12800',
    height_o: '12800',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2019-08-02 23:15:18',
    edited_on: '2019-08-02 23:15:18',
    name: 'Enoch',
    description: 'Livonia',
    dir: 'enoch',
  },
  {
    id: '59',
    scale: '1.0000',
    width: null,
    height: null,
    width_o: null,
    height_o: null,
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2019-08-16 23:15:18',
    edited_on: '2019-08-16 23:15:18',
    name: 'khe_sanh',
    description: '',
    dir: 'khe_sanh',
  },
  {
    id: '60',
    scale: '1.0000',
    width: null,
    height: null,
    width_o: null,
    height_o: null,
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2019-08-16 23:15:41',
    edited_on: '2019-08-16 23:15:41',
    name: 'DaKrong',
    description: '',
    dir: 'DaKrong',
  },
  {
    id: '61',
    scale: '1.0000',
    width: null,
    height: null,
    width_o: null,
    height_o: null,
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2019-08-23 23:15:53',
    edited_on: '2019-08-23 23:15:53',
    name: 'RungSat',
    description: '',
    dir: 'RungSat',
  },
  {
    id: '62',
    scale: '1.0000',
    width: null,
    height: null,
    width_o: null,
    height_o: null,
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2019-08-30 23:15:22',
    edited_on: '2019-08-30 23:15:22',
    name: 'prei_khmaoch_luong',
    description: '',
    dir: 'prei_khmaoch_luong',
  },
  {
    id: '63',
    scale: '0.0833',
    width: '122940',
    height: '122928',
    width_o: '10240',
    height_o: '10240',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2019-11-19 12:03:42',
    edited_on: '2019-11-19 12:03:42',
    name: 'tem_anizay',
    description: 'Anizay',
    dir: 'anizay',
  },
  {
    id: '64',
    scale: '1.0000',
    width: null,
    height: null,
    width_o: null,
    height_o: null,
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2019-11-19 12:06:20',
    edited_on: '2019-11-19 12:06:20',
    name: 'VR',
    description: '',
    dir: 'VR',
  },
  {
    id: '65',
    scale: '0.0500',
    width: '123100',
    height: '123100',
    width_o: '6155',
    height_o: '6155',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2019-12-07 00:15:17',
    edited_on: '2019-12-07 00:15:17',
    name: 'tem_vinjesvingenc',
    description: 'Vinjesvingenc',
    dir: 'vinjesvingenc',
  },
  {
    id: '66',
    scale: '0.0833',
    width: '98436',
    height: '98436',
    width_o: '8192',
    height_o: '8192',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2019-12-24 11:00:18',
    edited_on: '2019-12-24 11:00:18',
    name: 'hellanmaaw',
    description: 'Hellanmaa Winter',
    dir: 'hellanmaa',
  },
  {
    id: '67',
    scale: '1.0000',
    width: null,
    height: null,
    width_o: null,
    height_o: null,
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: null,
    added_on: '2020-03-25 23:34:04',
    edited_on: '2020-03-25 23:34:04',
    name: 'Bootcamp_ACR',
    description: '',
    dir: 'Bootcamp_ACR',
  },
  {
    id: '68',
    scale: '0.1667',
    width: '122940',
    height: '122970',
    width_o: '20480',
    height_o: '20480',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2020-07-10 12:17:45',
    edited_on: '2020-07-10 12:17:45',
    name: 'gm_weferlingen_summer',
    description: 'Weferlingen Summer',
    dir: 'weferlingen',
  },
  {
    id: '69',
    scale: '0.1667',
    width: '122940',
    height: '122970',
    width_o: '20480',
    height_o: '20480',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2020-07-10 12:19:12',
    edited_on: '2020-07-10 12:19:12',
    name: 'gm_weferlingen_winter',
    description: 'Weferlingen Winter',
    dir: 'weferlingen',
  },
  {
    id: '70',
    scale: '0.1429',
    width: '126091',
    height: '126063',
    width_o: '18000',
    height_o: '18000',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2020-07-21 17:15:23',
    edited_on: '2020-07-21 17:15:23',
    name: 'vt7',
    description: 'Valtatie 7',
    dir: 'vt7',
  },
  {
    id: '71',
    scale: '0.1667',
    width: '122940',
    height: '122916',
    width_o: '20480',
    height_o: '20480',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2021-03-24 12:47:40',
    edited_on: '2021-03-24 12:47:40',
    name: 'UMB_Colombia',
    description: 'Colombia',
    dir: 'colombia',
  },
  {
    id: '72',
    scale: '0.1250',
    width: '122968',
    height: '122936',
    width_o: '15360',
    height_o: '15360',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2021-10-06 11:38:30',
    edited_on: '2021-10-06 11:38:30',
    name: 'cup_chernarus_A3',
    description: 'Chernarus 2000',
    dir: 'chernarus2000',
  },
  {
    id: '73',
    scale: '0.2000',
    width: '122885',
    height: '122900',
    width_o: '24576',
    height_o: '24576',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2022-06-23 12:02:13',
    edited_on: '2022-06-23 12:02:13',
    name: 'rof_mok',
    description: 'Mull of Kintyre',
    dir: 'kintyre',
  },
  {
    id: '74',
    scale: '0.1000',
    width: '122990',
    height: '122980',
    width_o: '12288',
    height_o: '12288',
    offset: '300',
    zoom: '9',
    corr_x: '0',
    corr_y: '0',
    added_by: '1',
    added_on: '2023-07-22 11:02:00',
    edited_on: '2023-07-22 11:02:00',
    name: 'brf_sumava',
    description: 'Šumava',
    dir: 'sumava',
  },
].sort((a, b) => a.name.localeCompare(b.name));

export { mapList, markers };
