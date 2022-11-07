'use strict';

const { Topic } = require('../models/topic');

module.exports = {

  getAll: async (ctx) => {
    const topics = await Topic.find({});
    ctx.body = topics.sort((a, b) => b.score - a.score);
  },

  create: async (ctx) => {
    ctx.request.body.published_at = new Date();
    ctx.request.body.score = 0;
    ctx.status = 201;
    ctx.body = await Topic.create(ctx.request.body);
  },

  delete: async (ctx) => {
    const { id } = ctx.request.params;

    const query = await Topic.findOneAndDelete({_id: id});

    ctx.status = query ? 204 : 404;
    ctx.body = query ? '' : {status: 404, message: 'Topic not found'};
  },

  votingUp: async (ctx) => {
    const { id } = ctx.request.params;

    const obj = await Topic.findOne({_id: id}).exec();

    if (!obj) {
      ctx.status;
      ctx.body = {status: 404, message: 'Topic not found'};
      return;
    }

    obj.$inc('score', 1);

    ctx.body = await obj.save();
  },

  votingDown: async (ctx) => {
    const { id } = ctx.request.params;

    const obj = await Topic.findOne({_id: id}).exec();

    obj.$inc('score', -1);


    ctx.body = await obj.save();
  }

};