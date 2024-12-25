const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Parcel = require("../models/Parcel"); // Ensure correct model path
const {
  createParcel,
  getAllParcels,
  updateParcel,
  getOneParcel,
  getUserParcel,
  deleteParcel,
  addTrackingCheckpoint,
  getTrackingDetails,
} = require("../controllers/parcel");

// ================== Parcel Routes ==================

// Add a new parcel
router.post("/", createParcel);

// Get all parcels
router.get("/", getAllParcels);

// Update a parcel by ID
router.put("/:id", updateParcel);

// Get one parcel by ID
router.get("/find/:id", getOneParcel);

// Get parcels for a user (by email)
router.post("/me", getUserParcel);

// Delete a parcel by ID
router.delete("/:id", deleteParcel);

// ================== Tracking Routes ==================

// Add tracking checkpoint to a parcel
router.post("/:id/tracking", addTrackingCheckpoint);

// Get tracking details for a parcel
router.get("/:id/tracking", getTrackingDetails);

// ================== Specific Tracking Route ==================

// Get tracking status by trackingId
router.get("/track/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Validate the ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid parcel ID format" });
    }

    // Fetch parcel from the database
    const parcel = await Parcel.findById(id);

    if (!parcel) {
      return res.status(404).json({ message: "Parcel not found" });
    }

    // Success response
    res.status(200).json(parcel);
  } catch (error) {
    console.error("Error fetching parcel:", error.message);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});

// ================== Update Delivery Status ==================

// Update delivery status by trackingId
router.put("/update/:trackingId", async (req, res) => {
  const { status, location } = req.body;

  try {
    const parcel = await Parcel.findOneAndUpdate(
      { trackingId: req.params.trackingId },
      { status, location },
      { new: true }
    );

    if (!parcel) {
      return res.status(404).json({ message: "Parcel not found" });
    }

    // Success response
    res.status(200).json(parcel);
  } catch (error) {
    console.error("Error updating status:", error.message);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});

// ================== Export the Router ==================
module.exports = router;