var mongoose = require('mongoose');

var antenatal =  new mongoose.Schema({
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
    client_card_number: mongoose.Schema.Types.String,
    dob: mongoose.Schema.Types.Date,
    age: mongoose.Schema.Types.String,
    exact_age: mongoose.Schema.Types.Number,
    parity: mongoose.Schema.Types.Number,
    attendance_type: mongoose.Schema.Types.String,
    pregnancy_age: mongoose.Schema.Types.String,
    weight: mongoose.Schema.Types.String,
    blood_pressure: mongoose.Schema.Types.String,
    visits: mongoose.Schema.Types.String,
    hiv_testing: mongoose.Schema.Types.String,
    fgm: mongoose.Schema.Types.String,
    family_planning: mongoose.Schema.Types.String,
    maternal_nutrition: mongoose.Schema.Types.String,
    early_breast_feeding: mongoose.Schema.Types.String,
    exclusive_breast_feeding: mongoose.Schema.Types.String,
    syphilis_testing: mongoose.Schema.Types.String,
    syphilis_treated: mongoose.Schema.Types.String,
    hepatitis_b_testing: mongoose.Schema.Types.String,
    hepatitis_b_treated: mongoose.Schema.Types.String,
    hepatitis_c_testing: mongoose.Schema.Types.String,
    hepatitis_c_treated: mongoose.Schema.Types.String,
    anemia: mongoose.Schema.Types.String,
    sugar_test_result: mongoose.Schema.Types.String,
    urinalysis_sugar: mongoose.Schema.Types.String,
    protein: mongoose.Schema.Types.String,
    llin_given: mongoose.Schema.Types.String,
    ipt_one: mongoose.Schema.Types.String,
    ipt_two: mongoose.Schema.Types.String,
    ipt_three: mongoose.Schema.Types.String,
    ipt_greater_three: mongoose.Schema.Types.String,
    td: mongoose.Schema.Types.String,
    associaoted_problems: mongoose.Schema.Types.String,
    visit_outcome: mongoose.Schema.Types.String,
    referral_reason: mongoose.Schema.Types.String,
    transportation: mongoose.Schema.Types.String,
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
    completion_date: mongoose.Schema.Types.Date,
    verified_by: mongoose.Schema.Types.String,
    vr_designation: mongoose.Schema.Types.String,
    verification_date: mongoose.Schema.Types.Date,
    vr_signed: mongoose.Schema.Types.String
})

