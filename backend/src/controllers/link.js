const express = require('express');

const { Link } = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
  const accountId = 5;
  const links = await Link.findAll({ where: { accountId } });

  return res.jsonOK(links);
});

router.get('/:id', async (req, res) => {
  const accountId = 5;
  const { id } = req.params;
  const link = await Link.findOne({ where: { id, accountId } });
  if (!link) return res.jsonNotFound();

  return res.jsonOK(link);
});

router.post('/', async (req, res) => {
  const accountId = 5; // req.id 
  const { label, url, image, isSocial } = req.body;

  const link = await Link.create({ label, url, image, isSocial, accountId });

  return res.jsonOK(link);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const accountId = 5;
  const { body } = req;

  const fields = ['label', 'url', 'image', 'isSocial'];

  const link = await Link.findOne({ where: { id, accountId } });
  if (!link) return res.jsonNotFound();

  fields.map(fieldName => {
    const newValue = body[fieldName];
    if (newValue !== undefined) link[fieldName] = newValue;
  });

  await link.save();

  return res.jsonOK(link);

});

router.delete('/:id', async (req, res) => {
  const accountId = 5;
  const { id } = req.params;
  const link = await Link.findOne({ where: { id, accountId } });
  if (!link) return res.jsonNotFound();
  await link.destroy();

  return res.jsonOK();
});

module.exports = router;