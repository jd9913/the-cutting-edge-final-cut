const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    appointment: {
        type: Schema.Types.ObjectId,
        ref: 'Appt'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model('Booking', bookingSchema);