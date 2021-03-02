const {Schema, model} = require('mongoose')
const SubdetailsSchema = new Schema({
    topic: {
        type: String,
        required: true

    },
    url: {
        type: String,
        required: true
    },
    isDelete: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date
    }
}, {
    timestamps: true
}, {
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
})

const Subdetails = model('Subdetails', SubdetailsSchema)

module.exports = Subdetails

