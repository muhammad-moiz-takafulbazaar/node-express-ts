import express from 'express';

export const getAll = (req: express.Request, res: express.Response) => {
  return res.status(200).json({ message: 'Hello World' });
};
