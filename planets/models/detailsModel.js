import mongoose from "mongoose";

//creating schema

const detailSchema = mongoose.Schema(
    {
        name: 
        {
            type: String,
            required: true // Corrected "require" to "required"
        },
        size: 
        {
            type: Number, // Size in kilometers (e.g., diameter)
            required: true
        },

        moons: 
        {
            type: Number, // Number of moons
            required: true
        },

        planetType:
        {
            type: String, // Type of celestial body
            required: true,
            enum: ['Planet', 'Star', 'Moon', 'Asteroid', 'Comet', 'Dwarf Planet'] // Allowed types
        },

        distanceFromSun: 
        {
            type: Number, // Distance from the Sun in million kilometers
            required: false
        },

        orbitalPeriod: 
        {
            type: Number, // Orbital period in Earth days
            required: false
        },

        composition: 
        {
            type: String, 
            required: false,
        }
    },

    {
        timestamps: true
    }
)

//creating model and export it

const detailModel = mongoose.model("details",detailSchema)
export default detailModel

