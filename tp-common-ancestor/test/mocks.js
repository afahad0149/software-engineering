'use strict';

const Tree = require('../index.js');

// Mocks
const mocks = {
  gGma: new Tree('gGma'),
  gAnt: new Tree('gAnt'),
  gMa: new Tree('gMa'),
  momCousin: new Tree('momCousin'),
  farCousin: new Tree('farCousin'),
  ant: new Tree('ant'),
  cousin: new Tree('cousin'),
  mom: new Tree('mom'),
  me: new Tree('me'),
  potato: new Tree('potato')
};

mocks.gGma.addChild(mocks.gAnt);
mocks.gGma.addChild(mocks.gMa);
mocks.gAnt.addChild(mocks.momCousin);
mocks.momCousin.addChild(mocks.farCousin);
mocks.gMa.addChild(mocks.ant);
mocks.gMa.addChild(mocks.mom);
mocks.ant.addChild(mocks.cousin);
mocks.mom.addChild(mocks.me);

module.exports = mocks;
