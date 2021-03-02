const {Schema, model} = require('mongoose')
const MessageSchema = new Schema({
    subdetail: {
        type: Schema.Types.ObjectId,
        ref: 'subdetail'
    },
    message: {
        type: {}
    },
    isPublished: {
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

const MessageModel = model('message', MessageSchema)

module.exports = MessageModel

