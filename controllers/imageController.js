import express from "express";
import { getByID, deleteByID } from "../services/imageService.js"

const route = express.Router()


route.get("/:id", async (req, res) => {
  const id = req.params.id
  try {
    const image = await getByID(id);
    return res.send(image)
  } catch (error) {
    res.status(404).send(error)
  }
})


route.delete("/:id", async (req, res) => {
  const id = req.params.id
  try {
    await deleteByID(id);
    res.status(200).send()
  } catch (error) {
    res.status(404).send(error)
  }
})


export default route
