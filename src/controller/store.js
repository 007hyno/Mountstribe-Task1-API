import {getAll} from "../model/store.js"

export const getData = async (req, res) => {
  try {
    const data = await getAll();
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};