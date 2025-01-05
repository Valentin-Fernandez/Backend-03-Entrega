import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
    type: { type: String },
    age: { type: Number, required: true },
    adopted: { type: Boolean, default: false },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
});

const Pet = mongoose.model('Pet', petSchema);

export default Pet;
