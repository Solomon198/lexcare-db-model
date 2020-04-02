var mongoose = require('mongoose');

var birthregister = new mongoose.Schema({
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
    mothers_card_no: mongoose.Schema.Types.String,
    child_reg_date: mongoose.Schema.type.Date,
    dob: mongoose.Schema.type.Date,
    sex: mongoose.Schema.Types.String,
    child_surname: mongoose.Schema.Types.String,
    child_firstname: mongoose.Schema.Types.String,
    child_other_names: mongoose.Schema.Types.String,
    fathers_fullname: mongoose.Schema.Types.String,
    mothers_fullname: mongoose.Schema.Types.String,
    mothers_age: mongoose.Schema.Types.String,
    fathers_state_of_origin: mongoose.Schema.Types.String,
    parents_phone_no: mongoose.Schema.Types.String,
    parents_resdential_address: mongoose.Schema.Types.String,
    date_birth_cert_issued: mongoose.Schema.Types.String,
    cert_no: mongoose.Schema.Types.String,
    cert_collection_date: mongoose.Schema.Types.String,
    cert_collector_name: mongoose.Schema.Types.String,
    officer_responsible: mongoose.Schema.Types.String,
    created_at: mongoose.Schema.type.Date,
    updated_at: mongoose.Schema.Types.String,
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
    completion_date: mongoose.Schema.type.Date,
    verified_by: mongoose.Schema.Types.String,
    vr_designation: mongoose.Schema.Types.String,
    verification_date: mongoose.Schema.type.Date,
    vr_signed: mongoose.Schema.Types.String
})