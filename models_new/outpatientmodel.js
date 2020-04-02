var mongoose = require ("mongoose");
//var express = require ("express");

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
    date: mongoose.Schema.Types.Date,
    client_name: mongoose.Schema.Types.String,
    card_number: mongoose.Schema.Types.String,
    sex: mongoose.Schema.Types.String,
    age: mongoose.Schema.Types.String,
    dob: mongoose.Schema.Types.Date,
    attendance: mongoose.Schema.Types.String,
    weight: mongoose.Schema.Types.String,
    height: mongoose.Schema.Types.String,
    bmi: mongoose.Schema.Types.String,
    complaint: mongoose.Schema.Types.String,
    investigation: mongoose.Schema.Types.String,
    drugs_given: mongoose.Schema.Types.String,
    vist_outcome: mongoose.Schema.Types.String,
    ro_condition: mongoose.Schema.Types.String,
    clinical_diagnosis: mongoose.Schema.Types.String,
    rdt_state: mongoose.Schema.Types.String,
    rdt_years: mongoose.Schema.Types.String,
    micro_state: mongoose.Schema.Types.String,
    microscopy_years: mongoose.Schema.Types.String,
    act_given: mongoose.Schema.Types.String,
    other_antimaleria: mongoose.Schema.Types.String,
    severe_malaria: mongoose.Schema.Types.String,
    Pre_refferal: mongoose.Schema.Types.String,
    tb_score: mongoose.Schema.Types.String,
    reffered_tb: mongoose.Schema.Types.String,
    hep_b_tested: mongoose.Schema.Types.String,
    hep_b_ressult: mongoose.Schema.Types.String,
    hep_b_refered_tested: mongoose.Schema.Types.String,
    hep_c_tested: mongoose.Schema.Types.String,
    hep_c_ressult: mongoose.Schema.Types.String,
    hep_c_refered_tested: mongoose.Schema.Types.String,
    gbv_case_seen: mongoose.Schema.Types.String,
    gbv_care_received: mongoose.Schema.Types.String,
    gbv_reffered: mongoose.Schema.Types.String,
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

})