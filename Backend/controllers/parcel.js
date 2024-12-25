const Parcel = require("../models/Parcel");

//CREATE PARCEL

const createParcel = async (req, res) => {
  try {
    const newParcel = Parcel(req.body);
    const parcel = await newParcel.save();
    res.status(201).json(parcel);
  } catch (error) {
    res.status(500).json(error);
  }
};

//GET ALL PARCELS

const getAllParcels = async (req, res) => {
  try {
    const parcels = await Parcel.find().sort({ createdAt: -1 });
    res.status(200).json(parcels);
  } catch (error) {
    res.status(500).json(error);
  }
};

//UPDATE THE PARCEL

const updateParcel = async (req, res) => {
  try {
    const parcel = await Parcel.findById(req.params.id);
    res.status(201).json(parcel);
  } catch (error) {
    res.status(500).json(error);
  }
};

//GET ONE PARCEL

const getOneParcel = async (req, res) => {
  try {
    const parcel = await Parcel.findById(req.params.id);
    res.status(200).json(parcel);
  } catch (error) {
    res.status(500).json(error);
  }
};

//GET USERS PARCEL

const getUserParcel = async (req, res) => {
  try {
    const parcels = await Parcel.find({ senderemail: req.body.email }).sort({
      createdAt: -1,
    });
    res.status(200).json(parcels);
  } catch (error) {
    res.status(500).json(error);
  }
};

//DELETE A PARCEL

const deleteParcel = async (req, res) => {
  try {
    await Parcel.findByIdAndDelete(req.params.id);
    res.status(201).json("parcel has been deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

// ADD TRACKING CHECKPOINT
const addTrackingCheckpoint = async (req, res) => {
  try {
    const { location, status } = req.body;
    const parcel = await Parcel.findById(req.params.id);

    if (!parcel) {
      return res.status(404).json({ message: "Parcel not found" });
    }

    parcel.tracking.push({ location, status });
    await parcel.save();

    res.status(200).json({ message: "Checkpoint added", tracking: parcel.tracking });
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET TRACKING DETAILS
const getTrackingDetails = async (req, res) => {
  try {
    const parcel = await Parcel.findById(req.params.id);

    if (!parcel) {
      return res.status(404).json({ message: "Parcel not found" });
    }

    res.status(200).json(parcel.tracking);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createParcel,
  getAllParcels,
  getOneParcel,
  deleteParcel,
  getUserParcel,
  updateParcel,
  addTrackingCheckpoint,
  getTrackingDetails,
};