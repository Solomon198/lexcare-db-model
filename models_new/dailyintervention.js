var mongoose = require("mongoose");

var dailyintervention = new mongoose.Schema({
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
    date: mongoose.Schema.Types.Date,
    dialy_register_id: mongoose.Schema.Types.String,
    intervention_record_id: mongoose.Schema.Types.String,
    intervention_table_name: mongoose.Schema.Types.String,
    created_at: mongoose.Schema.Types.Date,
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
    completion_date: mongoose.Schema.Types.Date,
    verified_by: mongoose.Schema.Types.String,
    vr_designation: mongoose.Schema.Types.String,
    verification_date: mongoose.Schema.Types.Date,
    vr_signed: mongoose.Schema.Types.String
});