const reservationSchema = ({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must be atleast 3 characters!"],
        maxLength: [30, "First name cannot exceed more than 30 characters!"]
    },

    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must be atleast 3 characters long!"],
        maxLength: [30, "Last character cannot exceed more than 30 character!"]
    },

    email: {
        type:String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email!"]
    },

    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone number must be atleast 10 digits!"],
        maxLength: [10, "Phone number must not exceed 10 digits!"]
    },

    time: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    }
})

export const Reservation = mongoose.model("Reservation", reservationSchema);