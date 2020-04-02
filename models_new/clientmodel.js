var mongoose = require ("mongoose");

var outpatientschema = new mongoose.Schema({
    id: {
        type:mongoose.Schema.Types.String,
        unique: true
    },
    health_facility_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "health_facility"
    },
    client_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "clients"
    },
    date: mongoose.Schema.type.Date,
    client_name: mongoose.Schema.Types.String,
    client_card_number: mongoose.Schema.Types.String,
    date_of_birth: mongoose.Schema.type.Date,
    sex: mongoose.Schema.Types.String,
    age: mongoose.Schema.Types.String,
    exact_age: mongoose.Schema.type.client_card_number,
    contact_address: mongoose.Schema.Types.String,
    state_of_origin: mongoose.Schema.Types.String,
    telephone_no: mongoose.Schema.Types.String,
    first_contact_with_facility: mongoose.Schema.Types.String,
    reference_in: mongoose.Schema.Types.String,
    next_of_kin_name: mongoose.Schema.Types.String,
    kin_relationship_with_client: mongoose.Schema.Types.String,
    kin_address: mongoose.Schema.Types.String,
    kin_phone: mongoose.Schema.Types.String,
    created_at: mongoose.Schema.Types.Date,
    updated_at: mongoose.Schema.Types.Date,
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    updated_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "state"
    },
    zone: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "zones"
    },
    lga: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "lga"
    },
    ward: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ward"
    },
    completed_by: mongoose.Schema.Types.String,
    cp_designation: mongoose.Schema.Types.String,
    completion_date: mongoose.Schema.Date,
    verified_by: mongoose.Schema.Types.String,
    vr_designation: mongoose.Schema.Types.String,
    verification_date: mongoose.Schema.Date,
    vr_signed: mongoose.Schema.Types.String

});